import { call, takeLatest } from 'redux-saga/effects';
import ajax from '@store/api/ajax';
import { URL, routes } from '@constants';
import { history, simpleSagaErrorHandler } from '@utils';
import { authSignUp } from '@store/auth/actionCreators';
import { AuthActionTypes } from '@store/auth/actionTypes';
import { ErrorWithCodeType } from '@types';

export function* signUpSaga({ payload }: ReturnType<typeof authSignUp>) {
  try {
    const {
      login, email, password,
    } = payload;

    yield call(ajax, {
      method: 'POST',
      url: URL.AUTH.SIGN_UP,
      data: {
        login,
        email,
        password,
      },
    });

    history.push(routes.auth.root);
  } catch (err) {
    simpleSagaErrorHandler(err as ErrorWithCodeType);
  }
}

export function* authSignUpSaga() {
  yield takeLatest(AuthActionTypes.SIGN_UP, signUpSaga);
}
