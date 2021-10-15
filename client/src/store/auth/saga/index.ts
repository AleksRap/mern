import { fork } from 'redux-saga/effects';
import { authSignUpSaga } from './signUp';
import { authSignInSaga } from './signIn';
import { authSignOutSaga } from './signOut';

export function* authEffects() {
  yield fork(authSignInSaga);
  yield fork(authSignOutSaga);
  yield fork(authSignUpSaga);
}
