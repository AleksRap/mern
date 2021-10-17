import { NavbarLink } from '@types';
import { routes } from './routes';

export const NAVBAR_LINKS: NavbarLink[] = [
  {
    name: routes.create.title,
    link: routes.create.root,
  },
  {
    name: routes.links.title,
    link: routes.links.root,
  },
];
