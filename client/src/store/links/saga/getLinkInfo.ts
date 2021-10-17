import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { URL } from '@constants';
import { simpleSagaErrorHandler } from '@utils';
import { LinksGetLinkInfoRes, ErrorWithCodeType } from '@types';
import ajax from '@store/api/ajax';
import { LinksActionTypes } from '@store/links/actionTypes';
import { linksGetLinkInfo, linksSetState } from '@store/links/actionCreators';

export function* getLinkInfoSaga({ payload }: ReturnType<typeof linksGetLinkInfo>) {
  try {
    const { id } = payload;

    const response: AxiosResponse<LinksGetLinkInfoRes> = yield call(ajax, {
      method: 'GET',
      url: URL.LINKS.GET,
      params: {
        id,
      }
    });

    const { link } = response.data;

    yield put(linksSetState({
      link,
    }));
  } catch (err) {
    simpleSagaErrorHandler(err as ErrorWithCodeType);
  }
}

export function* linksGetLinkInfoSaga() {
  yield takeLatest(LinksActionTypes.GET_LINK_INFO, getLinkInfoSaga);
}
