import { AuthState } from '@store/auth/types';
import { LinksState } from '@store/links/types';

export * from '@store/auth/types';
export * from '@store/links/types';

export type ReduxState = {
  auth: AuthState,
  links: LinksState,
};
