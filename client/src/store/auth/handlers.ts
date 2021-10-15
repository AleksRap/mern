/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthState, ActionFn } from '@types';
import { AuthActionTypes } from '@store/auth/actionTypes';
import { authSetState } from '@store/auth/actionCreators';

type AuthHandlerFn<F extends (...args: any) => any> = ActionFn<AuthState, ReturnType<F>>;

const setState: AuthHandlerFn<typeof authSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const AUTH_ACTIONS = {
  [AuthActionTypes.SET_STATE]: setState,
};
