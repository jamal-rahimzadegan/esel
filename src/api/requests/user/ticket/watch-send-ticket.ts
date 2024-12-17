import { put } from 'redux-saga/effects';
import { hideLoader, showAlert, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

interface Payload {
  payload: { subject: string; text: string; setMsg: Function };
}

export function* watchSendTicket({ payload }: Payload): Generator<object> {
  const { text, subject, setMsg } = payload;
  try {
    yield put(showLoader());

    const { res }: any = yield axiosReq.post('Ticket', {
      data: { text, subject },
    });

    if (res.success) {
      yield put(showAlert('success', 'پیام با موفقیت ارسال شد'));
      setMsg('');
    }
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
