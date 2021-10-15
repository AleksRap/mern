import type { ReduxState, AuthState } from '@types';

export const authSelectors = {
  getProp: <T extends keyof AuthState>(propKey: T) => (state: ReduxState) => state.auth[propKey],
  getAuth: (state: ReduxState) => state.auth,
};
