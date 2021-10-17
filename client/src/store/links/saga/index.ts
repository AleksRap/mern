import { fork } from 'redux-saga/effects';
import { linksGetLinksSaga } from './getLinks';
import { linksGetLinkInfoSaga } from './getLinkInfo';
import { linksGenerateLinkSaga } from './generateLink';

export function* linksEffects() {
  yield fork(linksGetLinksSaga);
  yield fork(linksGetLinkInfoSaga);
  yield fork(linksGenerateLinkSaga);
}
