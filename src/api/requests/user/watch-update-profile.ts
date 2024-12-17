import { put, all } from 'redux-saga/effects';
import handleError from '../../handle-error';
import { ActionWithPayload } from 'types/index';
import { hideLoader, showAlert, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import createAction, { actions } from 'store/actions';

export interface WatchUpdateProfile extends ActionWithPayload<any> {}

export function* watchUpdateProfile({ payload }: WatchUpdateProfile): Generator<object> {
  try {
    const { fName, lName, email, nationalCode } = payload;
    yield put(showLoader());
    const { res }: any = yield axiosReq.put('User', {
      data: {
        fName,
        lName,
        nationalCode: nationalCode || null,
        email: email || null,
        reporterMob: null,
        age: null,
        sex: null,
        credit: 0,
      },
    });

    yield all([
      put(hideLoader()),
      put(createAction(actions.WATCH_GET_PROFILE)),
      put(showAlert('success', 'تغییرات با موفقیت اعمال شد')),
    ]);
  } catch (e) {
    yield handleError(e);
    yield put(hideLoader());
  }
}
