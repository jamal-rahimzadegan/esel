import { all, put } from 'redux-saga/effects';
import handleError from '../../handle-error';
import { ActionWithPayload, ComplexObject } from 'types/index';
import { hideLoader, showAlert, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import createAction, { actions } from 'store/actions';

export interface WatchUpdateProject extends ActionWithPayload<any> {
  projectInfo: ComplexObject;
  contractorDetails: ComplexObject;
  ownerDetails: ComplexObject;
  otherSupervisorsInfo: ComplexObject;
}

export function* watchUpdateProject({ payload }: WatchUpdateProject): Generator<object> {
  try {
    yield put(showLoader());

    const {
      updatedProject: {
        proName,
        proNumber,
        proAddress,
        proDate,
        proSpace,
        builderName,
        builderMobile,
        builderAddress,
        landownerName,
        landownerMobile,
        landownerAddress,
        projectID,
        supervisors,
      },
    } = payload;

    const data = {
      proName,
      proNumber,
      proAddress,
      proDate,
      proSpace,
      builderName,
      builderMobile,
      builderAddress,
      landownerName,
      landownerMobile,
      landownerAddress,
      projectID,
      state: 1,
      supervisors,
    };
    const { res }: any = yield axiosReq.put('Project', {
      data,
    });

    if (!!res?.success) {
      yield all([
        put(showAlert('success', 'تغییرات با موفقیت ثبت شدند.')),
        // put(
        //   createAction(actions.CHANGE_PROJECT_STEP, {
        //     id: projectID,
        //     step: '/project/on-going',
        //   })
        // ),
      ]);
    }
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
