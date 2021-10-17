import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { URL, routes } from '@constants';
import { history, simpleSagaErrorHandler } from '@utils';
import { AuthSignInRes, ErrorWithCodeType } from '@types';
import ajax from '@store/api/ajax';
import { authSignIn, authSetState } from '@store/auth/actionCreators';
import { AuthActionTypes } from '@store/auth/actionTypes';

export function* signInSaga({ payload }: ReturnType<typeof authSignIn>) {
  try {
    const { loginOrEmail, password } = payload;

    const response: AxiosResponse<AuthSignInRes> = yield call(ajax, {
      method: 'POST',
      url: URL.AUTH.SIGN_IN,
      data: {
        loginOrEmail,
        password,
      },
    });
    const { token, userId } = response.data;

    if (token) {
      yield put(authSetState({
        token,
        id: userId,
        isAuth: true,
      }));

      history.push(routes.create.root);
    }
  } catch (err) {
    simpleSagaErrorHandler(err as ErrorWithCodeType);
  }
}

export function* authSignInSaga() {
  yield takeLatest(AuthActionTypes.SIGN_IN, signInSaga);
}
