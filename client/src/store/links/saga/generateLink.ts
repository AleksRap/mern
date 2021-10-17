import { call, put, takeLatest, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { routes, URL } from '@constants';
import { history, simpleSagaErrorHandler } from '@utils';
import { LinksGenerateLinkRes, ErrorWithCodeType, Link } from '@types';
import ajax from '@store/api/ajax';
import { LinksActionTypes } from '@store/links/actionTypes';
import { linksSetState } from '@store/links/actionCreators';
import { linksGenerateLink } from '@store/links/actionCreators';
import { linksSelectors } from '@store/links/selectors';

export function* generateLinkSaga({ payload }: ReturnType<typeof linksGenerateLink>) {
  try {
    const { link } = payload;

    const response: AxiosResponse<LinksGenerateLinkRes> = yield call(ajax, {
      method: 'POST',
      url: URL.LINKS.GENERATE,
      data: {
        to: link,
      }
    });

    const { link: linkResult } = response.data;

    const links: Link[] = yield select(linksSelectors.getProp('links'));
    yield put(linksSetState({
      links: [...links, linkResult],
    }));

    history.push(`${routes.details.link}/${linkResult._id}`);
  } catch (err) {
    simpleSagaErrorHandler(err as ErrorWithCodeType);
  }
}

export function* linksGenerateLinkSaga() {
  yield takeLatest(LinksActionTypes.GENERATE_LINK, generateLinkSaga);
}
