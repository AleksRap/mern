import { Routes } from '@types';

export const routes: Routes = {
  auth: {
    root: '/auth',
    title: 'Auth',
  },
  registration: {
    root: '/registration',
    title: 'Registration',
  },
  create: {
    root: '/create',
    title: 'Create',
  },
  links: {
    root: '/links',
    title: 'Links',
  },
  details: {
    root: '/details/:id',
    link: '/details',
    title: 'Details',
  },
};
