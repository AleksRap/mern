import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { URL, routes } from '@constants';
import { history, simpleSagaErrorHandler } from '@utils';
import { RequestStatus, AuthTokenRes, ErrorWithCodeType } from '@types';
import ajax from '@store/api/ajax';
import { authSignIn, authSetState } from '@store/auth/actionCreators';
import { AuthActionTypes } from '@store/auth/actionTypes';

export function* signInSaga({ payload }: ReturnType<typeof authSignIn>) {
  const { loginOrEmail, password } = payload;
  try {
    yield put(authSetState({
      [AuthActionTypes.SIGN_IN]: RequestStatus.INIT,
    }));

    const response: AxiosResponse<AuthTokenRes> = yield call(ajax, {
      method: 'POST',
      url: URL.AUTH.SIGN_IN,
      data: {
        loginOrEmail,
        password,
      },
    });
    const { token } = response.data;

    if (token) {
      yield put(authSetState({
        token,
        isAuth: true,
      }));

      history.push(routes.create.root);
    }
  } catch (err) {
    yield put(authSetState({
      [AuthActionTypes.SIGN_IN]: RequestStatus.ERROR,
    }));
    simpleSagaErrorHandler(err as ErrorWithCodeType);
  }
}

export function* authSignInSaga() {
  yield takeLatest(AuthActionTypes.SIGN_IN, signInSaga);
}
