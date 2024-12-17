import { put } from 'redux-saga/effects';
import { hideLoader, showAlert, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

interface Payload {
  payload: { id: string; status: number };
}

export function* watchUpdateTicketStatus({ payload }: Payload): Generator<object> {
  const { id, status } = payload;
  try {
    yield put(showLoader());
    const { res }: any = yield axiosReq.put(`Ticket/status/${id}`);
    if (res.success) {
      yield put(showAlert('success', 'وضعیت تیکت با موفقیت تغییر یافت.'));
    }
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
