import { put } from 'redux-saga/effects';
import handleError from '../../handle-error';
import axiosReq from 'services/api-service';
import createAction, { actions } from 'store/actions';
import { kookie } from 'services/index';

export function* watchSyncUserData(): Generator<object> {
  try {
    const cookies: any = yield kookie.getAll();
    axiosReq.token = cookies.token;
    yield put(createAction(actions.GET_USER_DATA));
  } catch (e) {
    yield handleError(e);
  }
}
