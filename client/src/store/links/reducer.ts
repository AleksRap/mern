import { LinksState } from '@types';
import { createReducer } from '@utils';
import { LINKS_ACTIONS } from '@store/links/handlers';

const initialState: LinksState = {
  links: [],
  link: null,
};

export default createReducer(initialState, LINKS_ACTIONS);
