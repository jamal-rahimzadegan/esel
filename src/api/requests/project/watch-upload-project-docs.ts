import { delay, put } from 'redux-saga/effects';
import { ActionWithPayload } from 'types/index';
import { hideLoader, showAlert, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

export interface Payload extends ActionWithPayload<any> {
  id: string;
  content: string;
  fileName: string;
}

export function* watchUploadPorjectDocs({ payload }: Payload): Generator<object> {
  try {
    yield put(showLoader());

    const { id, content, fileName } = payload;

    const { res }: any = yield axiosReq.post(`Documents`, {
      data: {
        projectID: id,
        base64Image: content,
        fileName: fileName.replace(/\.[^/.]+$/, ''), // removing the file ext
        ext: fileName.split('.').pop(), // file extension,
        description: '',
      },
    });

    if (res?.success) {
      yield put(showAlert('success', 'فایل با موفقیت ارسال شد'));
      yield delay(2500);
      location.reload();
    }
  } catch (e) {
    yield handleError(e, 'watch upload docs');
  } finally {
    yield put(hideLoader());
  }
}
