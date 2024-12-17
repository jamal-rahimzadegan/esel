import { delay, put } from 'redux-saga/effects';
import { ActionWithPayload } from 'types/index';
import { hideLoader, showAlert, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from '../../handle-error';

export interface Payload extends ActionWithPayload<any> {
  info: any;
}

export function* watchFinishProject({ payload }: Payload): Generator<object> {
  try {
    yield put(showLoader());
    const { info } = payload;

    const { res }: any = yield axiosReq.put('Project/EndProject', {
      data: { projectID: info.projectID },
    });

    if (!!res?.success) {
      yield put(showAlert('success', 'پروژه پایان یافت'));
      delay(1000);
      window.location.reload();
    }
  } catch (e) {
    yield handleError(e, 'watchFinishProject');
  } finally {
    yield put(hideLoader());
  }
}
