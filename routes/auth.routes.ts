import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';
import { User } from '@models';
import { Validations } from '@constants';

export const authRouter = Router();

// /api/auth/register
authRouter.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', `Минимальная длина пароля ${Validations.passMinLength} символов`)
      .isLength({ min: Validations.passMinLength }),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации',
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'Пользователь создан' });

    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

// /api/auth/login
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
          message: 'Некорректные данные при входе в систему',
        });
      }



    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });
