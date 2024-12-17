import { put } from 'redux-saga/effects';
import { hideLoader, showLoader, download } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';
import { OrderAnswerType } from 'views/contents/Order';

interface PayloadType {
  payload: { name: string; items: OrderAnswerType };
}

export function* watchPdfFromOrder({ payload }: PayloadType) {
  const { name, items } = payload;
  try {
    yield put(showLoader());
    const { res }: any = yield axiosReq.post('/Order/PDFMakerFromOrder', { data: { name, items } });
    const { result: url } = res;
    window.open(url, name);
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
