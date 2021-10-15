import { AuthActionTypes } from '@store/auth/actionTypes';
import { RequestStatus } from '@types';

export type AuthState = {
  isAuth: boolean,
  token: string | null,

  [AuthActionTypes.SIGN_UP]: RequestStatus,
  [AuthActionTypes.SIGN_IN]: RequestStatus,
};

export type AuthSignUp = {
  email: string,
  login: string,
  password: string,
};

export type AuthSignIn = {
  loginOrEmail: string;
  password: string;
};

export type AuthTokenRes = {
  token: string
};
