import { fork } from 'redux-saga/effects';
import { authEffects } from '@store/auth/saga';
import { linksEffects } from '@store/links/saga';

export default function* rootSaga() {
  yield fork(authEffects);
  yield fork(linksEffects);
}
