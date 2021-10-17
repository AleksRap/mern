import { Routes } from '@types';

export const routes: Routes = {
  auth: {
    root: '/auth',
    title: 'Авторизация',
  },
  registration: {
    root: '/registration',
    title: 'Регистрация',
  },
  create: {
    root: '/create',
    title: 'Создать',
  },
  links: {
    root: '/links',
    title: 'Ссылки',
  },
  details: {
    root: '/details/:id',
    link: '/details',
    title: 'Детали',
  },
};
