import { put } from 'redux-saga/effects';
import { hideLoader, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

interface Payload {
  payload: { cb: Function; ticketID: string };
}

export function* watchGetTicketDetails({ payload }: Payload): Generator<object> {
  const { ticketID, cb } = payload;
  try {
    yield put(showLoader());
    const { res }: any = yield axiosReq.get(`/Ticket/${ticketID}`);
    if (res.success) cb?.(res.tikets);
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
