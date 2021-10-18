import { Router, Request, Response } from 'express';
import config from 'config';
import shortid from 'shortid';
import { Link } from '@models';
import { authMiddleware } from '@middlewares';
import { ERRORS } from '@constants';

export const linkRouter = Router();

linkRouter.post('/generate', authMiddleware, async (req: Request, res: Response) => {
  try {
    const baseUrl = config.get('baseUrl');
    const { to } = req.body;

    const code = shortid.generate();

    const existing = await Link.findOne({ to });
    if (existing) return res.json({ link: existing });

    const from = baseUrl + '/t/' + code;

    const link = new Link({
      code,
      to,
      from,
      owner: res.locals.user.userId,
    });

    await link.save();

    res.status(201).json({ link });

  } catch (e) {
    res.status(500).json({ message: ERRORS.common });
  }
});

linkRouter.get('/', authMiddleware, async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (id) {
      const link = await Link.findById(id);
      res.json({ link });
    } else {
      const links = await Link.find({ owner: res.locals.user.userId });
      res.json({ links });
    }
  } catch (e) {
    res.status(500).json({ message: ERRORS.common });
  }
});
