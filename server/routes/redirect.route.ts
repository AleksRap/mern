import { Router, Request, Response } from 'express';
import { Link } from '@models';
import { ERRORS } from '@constants';

export const redirectRouter = Router();

redirectRouter.get('/:code', async (req: Request, res: Response) => {
  try {
    const { code } = req.params;

    const link = await Link.findOne({ code });

    if (link) {
      link.clicks++;
      await link.save();

      return res.redirect(link.to);
    }

    res.status(404).json({ message: ERRORS.links.linkNotFound });
  } catch (e) {
    res.status(500).json({ message: ERRORS.common });
  }
});
