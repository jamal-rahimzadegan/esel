import { put } from 'redux-saga/effects';
import handleError from '../../handle-error';
import { ActionWithPayload } from 'types/index';
import { hideLoader, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import createAction, { actions } from 'store/actions';

export interface WatchGetProfile extends ActionWithPayload<any> {}

export function* watchGetProfile({ payload }: WatchGetProfile): Generator<object> {
  try {
    yield put(showLoader());
    const { res }: any = yield axiosReq.get('User');
    let tickets = [];
    if (res.success) {
      yield put(createAction(actions.SET_USER_DATA, res.users));
    }
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
