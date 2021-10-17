import { connectRouter } from 'connected-react-router';
import { history } from '@utils';
import auth from '@store/auth/reducer';

export default {
  router: connectRouter(history),
  auth,
};
