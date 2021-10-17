import { RequestStatus, AuthState } from '@types';
import { createReducer } from '@utils';
import { AuthActionTypes } from '@store/auth/actionTypes';
import { AUTH_ACTIONS } from '@store/auth/handlers';

const initialState: AuthState = {
  isAuth: false,
  token: null,
  id: null,

  [AuthActionTypes.SIGN_IN]: RequestStatus.INIT,
  [AuthActionTypes.SIGN_UP]: RequestStatus.INIT,
};

export default createReducer(initialState, AUTH_ACTIONS);
