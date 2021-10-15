import { fork } from 'redux-saga/effects';
import { authEffects } from '@store/auth/saga';

export default function* rootSaga() {
  yield fork(authEffects);
}
