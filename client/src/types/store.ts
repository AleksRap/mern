import type { AuthState } from '@store/auth/types';

export * from '@store/auth/types';

export type ReduxState = {
  auth: AuthState,
};
