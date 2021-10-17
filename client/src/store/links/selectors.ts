import type { ReduxState, LinksState } from '@types';

export const linksSelectors = {
  getProp: <T extends keyof LinksState>(propKey: T) => (state: ReduxState) => state.links[propKey],
  getLinks: (state: ReduxState) => state.links,
};
