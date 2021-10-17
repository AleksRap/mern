import type {
  LinksState, LinksGenerateLink, LinksGetLinkInfo
} from '@types';
import { LinksActionTypes } from '@store/links/actionTypes';

export const linksSetState = (payload: Partial<LinksState>) => ({
  type: LinksActionTypes.SET_STATE,
  payload,
});

export const linksGetLinks = () => ({
  type: LinksActionTypes.GET_LINKS,
});

export const linksGenerateLink = (payload: LinksGenerateLink) => ({
  type: LinksActionTypes.GENERATE_LINK,
  payload,
});

export const linksGetLinkInfo = (payload: LinksGetLinkInfo) => ({
  type: LinksActionTypes.GET_LINK_INFO,
  payload,
});
