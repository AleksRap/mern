import { call, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import ajax from '@store/api/ajax';
import { URL, routes } from '@constants';
import { history, setNotification, simpleSagaErrorHandler } from '@utils';
import { authSignUp } from '@store/auth/actionCreators';
import { AuthActionTypes } from '@store/auth/actionTypes';
import { AuthSignUpRes, ErrorWithCodeType } from '@types';

export function* signUpSaga({ payload }: ReturnType<typeof authSignUp>) {
  try {
    const {
      login, email, password,
    } = payload;

    const response: AxiosResponse<AuthSignUpRes> = yield call(ajax, {
      method: 'POST',
      url: URL.AUTH.SIGN_UP,
      data: {
        login,
        email,
        password,
      },
    });

    const { message } = response.data;

    history.push(routes.auth.root);

    setNotification({
      type: 'success',
      title: 'Регистрация',
      message,
    });
  } catch (err) {
    simpleSagaErrorHandler(err as ErrorWithCodeType);
  }
}

export function* authSignUpSaga() {
  yield takeLatest(AuthActionTypes.SIGN_UP, signUpSaga);
}
