import type {
  AuthState,
  AuthSignIn,
  AuthSignUp,
} from '@types';
import { AuthActionTypes } from '@store/auth/actionTypes';

export const authSetState = (payload: Partial<AuthState>) => ({
  type: AuthActionTypes.SET_STATE,
  payload,
});

export const authSignUp = (payload: AuthSignUp) => ({
  type: AuthActionTypes.SIGN_UP,
  payload,
});

export const authSignIn = (payload: AuthSignIn) => ({
  type: AuthActionTypes.SIGN_IN,
  payload,
});

export const authSignOut = () => ({
  type: AuthActionTypes.SIGN_OUT,
});
