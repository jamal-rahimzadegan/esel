import { put } from 'redux-saga/effects';
import { hideLoader, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

interface Payload {
  payload: { cb: Function };
}

export function* watchGetTickets({ payload }: Payload): Generator<object> {
  try {
    yield put(showLoader());
    const { res }: any = yield axiosReq.get('Ticket/List');

    if (res.success) payload.cb?.(res.tikets);
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
