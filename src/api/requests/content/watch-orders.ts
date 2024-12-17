import { put } from 'redux-saga/effects';
import { hideLoader, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

interface PayloadType {
  payload: { order: string; setData: Function };
}

export function* watchOrder({ payload }: PayloadType): Generator<object> {
  const { order, setData } = payload;
  try {
    yield put(showLoader());
    const { res }: any = yield axiosReq.get('Order/ByName/' + order);
    setData(res.result.items);
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
