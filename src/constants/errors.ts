import { Validations } from '@constants/validation';

export const ERRORS = {
  auth: {
    incorrectEmail: 'Некорректный email',
    minLengthPass: (minLength: number = Validations.passMinLength) =>
      `Минимальная длина пароля ${minLength} символов`,
    incorrectRegistration: 'Некорректные данные при регистрации',
    userExists: 'Такой пользователь уже существует',
    incorrectData: 'Некорректные данные при входе в систему',
    userNotFound: 'Пользователь не найден',
    incorrectPassword: 'Неверный пароль, попробуйте снова',
  },
  common: 'Что-то пошло не так, попробуйте снова',
};
