import { delay, put } from 'redux-saga/effects';
import { ActionWithPayload } from 'types/index';
import { hideLoader, showAlert, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

export interface Payload extends ActionWithPayload<any> {
  id: string;
}

export function* watchDeleteProject({ payload }: Payload): Generator<object> {
  try {
    yield put(showLoader());
    const { id } = payload;
    const { res }: any = yield axiosReq.delete('Project/?id=' + id);

    if (!!res?.success) {
      yield put(showAlert('success', 'پروژه حذف شد'));
      delay(2000);
      window.location.reload();
    }
  } catch (e) {
    yield handleError(e, 'watch delete Project');
  } finally {
    yield put(hideLoader());
  }
}
