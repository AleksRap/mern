import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import { ERRORS } from '@constants';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    if (req.headers.authorization) {
      const authHeader = req.headers.authorization;
      const token = authHeader.split(' ')[1];
      if (!token) throw Error();

      res.locals.user = jwt.verify(token, config.get('jwtSecret'));
    } else {
      throw Error();
    }

    next();
  } catch (e) {
    return res.status(401).json({ message: ERRORS.auth.notAuth });
  }
};
