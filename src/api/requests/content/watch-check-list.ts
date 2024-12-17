import { put } from 'redux-saga/effects';
import { ActionWithPayload } from 'types/index';
import { hideLoader, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

export interface Payload extends ActionWithPayload<any> {
  name: string;
  cb: Function;
}

// example: عمران، تک ناظره،اسکلت بندی،  چك ليست كنترل ستون‏هاي بتني / (64)

export function* watchCheckList({ payload }: Payload): Generator<object> {
  const { name, cb } = payload;
  try {
    yield put(showLoader());
    const { res }: any = yield axiosReq.get(`Checklist/ByName/${name}`);
    cb?.(res.result.subCheckList);
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
