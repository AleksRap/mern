export const ERRORS = {
  auth: {
    incorrectEmail: 'Некорректный email',
    incorrectLogin: 'Некорректный логин',
    minLength: (minLength: number) =>
      `Минимальная длина ${minLength} символов`,
    incorrectRegistration: 'Некорректные данные при регистрации',
    userExists: 'Такой пользователь уже существует',
    incorrectData: 'Некорректные данные при входе в систему',
    userNotFound: 'Пользователь не найден',
    incorrectPassword: 'Неверный пароль, попробуйте снова',
    notAuth: 'Нет авторизации',
  },
  links: {
    linkNotFound: 'Ссылка не найдена',
  },
  common: 'Что-то пошло не так, попробуйте снова',
};
