import { put } from 'redux-saga/effects';
import { ActionWithPayload } from 'types/index';
import { hideLoader, showLoader } from 'utils/index';
import handleError from '../../handle-error';
import axiosReq from 'services/api-service';

export interface WatchGetProject extends ActionWithPayload<any> {
  executeOnEnd: Function;
  phase: 'done' | 'onGoing'; // done: 0 , onGoing: 1
}

export function* watchGetProjects({ payload }: WatchGetProject): Generator<object> {
  try {
    const { executeOnEnd, phase } = payload;
    yield put(showLoader());
    const state = phase === 'done' ? 0 : 1;

    const { res }: any = yield axiosReq.get(`Project/GetProjectByProjectStaus/${!state}`);

    executeOnEnd?.(res.projects);
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
