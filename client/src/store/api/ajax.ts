import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance, AxiosPromise } from 'axios';
import {
  put, call, select, CallEffect, PutEffect, SelectEffect,
} from 'redux-saga/effects';
import {
  ErrorWithCode, getErrorMsg, validateStatus,
} from '@utils';
import { ExtendHeaders, ResponseData } from '@types';
import { errorStatuses } from '@constants';
import { authSetState, authSignOut } from '@store/auth/actionCreators';
import { authSelectors } from '@store/auth/selectors';

const client: AxiosInstance = axios.create({
  baseURL: '/api',
  validateStatus,
});

export default function* ajax(
  config: AxiosRequestConfig,
): Generator<SelectEffect | CallEffect | PutEffect> {
  const accessToken = yield select(authSelectors.getProp('token'));

  if (accessToken) {
    const headers: ExtendHeaders = client.defaults.headers;
    headers.Authorization = `Bearer ${accessToken}`;
  }

  // @ts-ignore
  const response: AxiosResponse<ResponseData> = yield call<(config: AxiosRequestConfig) => AxiosPromise>(client, config);

  if (response.data?.token) {
    yield put(authSetState({
      token: response.data.token,
    }));
  }

  if (accessToken && response.status === 401) {
    yield put(authSignOut());
  }

  if (errorStatuses.includes(response.status)) {
    throw new ErrorWithCode({
      name: response.data?.error || 'Error',
      message: getErrorMsg(response.data.message) || response.statusText,
      code: response.status,
    });
  }

  return response;
}
