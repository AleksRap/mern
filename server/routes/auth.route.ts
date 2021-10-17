import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';
import { User } from '@models';
import { Validations, ERRORS, SUCCESS } from '@constants';

export const authRouter = Router();

authRouter.post(
  '/register',
  [
    check('login', ERRORS.auth.minLength(Validations.loginOrEmailMinLength))
      .isLength({ min: Validations.loginOrEmailMinLength }),
    check('email', ERRORS.auth.incorrectEmail).isEmail(),
    check('password', ERRORS.auth.minLength(Validations.passMinLength))
      .isLength({ min: Validations.passMinLength }),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: ERRORS.auth.incorrectRegistration,
        });
      }

      const { login, email, password } = req.body;

      const candidateEmail = await User.findOne({ email });
      const candidateLogin = await User.findOne({ login });

      if (candidateEmail || candidateLogin) {
        return res.status(400).json({ message: ERRORS.auth.userExists });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ login, email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: SUCCESS.auth.userCreated });

    } catch (e) {
      res.status(500).json({ message: ERRORS.common });
    }
  });

authRouter.post(
  '/login',
  [
    check(),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: ERRORS.auth.incorrectData,
        });
      }

      const { loginOrEmail, password } = req.body;

      const user = loginOrEmail.includes('@')
        ? await User.findOne({ email: loginOrEmail })
        : await User.findOne({ login: loginOrEmail });

      if (!user) {
        return res.status(400).json({ message: ERRORS.auth.userNotFound });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: ERRORS.auth.incorrectPassword });
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' },
      );

      res.json({ token, userId: user.id });

    } catch (e) {
      res.status(500).json({ message: ERRORS.common });
    }
  });
