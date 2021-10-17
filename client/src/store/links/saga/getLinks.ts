import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { URL } from '@constants';
import { simpleSagaErrorHandler } from '@utils';
import { LinksGetLinksRes, ErrorWithCodeType } from '@types';
import ajax from '@store/api/ajax';
import { LinksActionTypes } from '@store/links/actionTypes';
import { linksSetState } from '@store/links/actionCreators';

export function* getLinksSaga() {
  try {
    const response: AxiosResponse<LinksGetLinksRes> = yield call(ajax, {
      method: 'GET',
      url: URL.LINKS.GET,
    });

    const { links } = response.data;

    yield put(linksSetState({
      links,
    }));
  } catch (err) {
    simpleSagaErrorHandler(err as ErrorWithCodeType);
  }
}

export function* linksGetLinksSaga() {
  yield takeLatest(LinksActionTypes.GET_LINKS, getLinksSaga);
}
