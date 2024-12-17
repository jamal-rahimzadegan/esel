import { put } from 'redux-saga/effects';
import handleError from '../../handle-error';
import { hideLoader } from 'utils/index';
import axiosReq from 'services/api-service';

export function* watchSignup(): Generator<object> {
  try {
    const { res }: any = yield axiosReq.post('User', {
      data: {
        fName: '',
        lName: '',
      },
    });

    if (res.success) window.location.href = '/home';
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
