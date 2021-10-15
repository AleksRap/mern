import { shallowEqual, useSelector, Selector } from 'react-redux';
import { ReduxState } from '@types';

export const useShallowSelector = <Type = ReduxState>
  (selector: Selector<ReduxState, Type>): Type =>
    useSelector<ReduxState, Type>(selector, shallowEqual);
