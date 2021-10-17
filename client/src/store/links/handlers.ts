/* eslint-disable @typescript-eslint/no-explicit-any */
import { LinksState, ActionFn } from '@types';
import { LinksActionTypes } from '@store/links/actionTypes';
import { linksSetState } from '@store/links/actionCreators';

type LinksHandlerFn<F extends (...args: any) => any> = ActionFn<LinksState, ReturnType<F>>;

const setState: LinksHandlerFn<typeof linksSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const LINKS_ACTIONS = {
  [LinksActionTypes.SET_STATE]: setState,
};
