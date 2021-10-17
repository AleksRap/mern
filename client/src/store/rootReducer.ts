import { connectRouter } from 'connected-react-router';
import { history } from '@utils';

import auth from '@store/auth/reducer';
import links from '@store/links/reducer';

export default {
  router: connectRouter(history),
  auth,
  links,
};
