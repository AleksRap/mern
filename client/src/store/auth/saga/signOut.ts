import { takeLatest, put } from 'redux-saga/effects';
import { routes } from '@constants';
import { history, simpleSagaErrorHandler } from '@utils';
import { AuthActionTypes } from '@store/auth/actionTypes';
import { authSetState } from '@store/auth/actionCreators';
import { ErrorWithCodeType } from '@types';

function* signOut() {
  try {
    yield put(authSetState({
      token: null,
      isAuth: false,
    }));

    history.push(routes.auth.root);
  } catch (err) {
    simpleSagaErrorHandler(err as ErrorWithCodeType);
  }
}

export function* authSignOutSaga() {
  yield takeLatest(AuthActionTypes.SIGN_OUT, signOut);
}
