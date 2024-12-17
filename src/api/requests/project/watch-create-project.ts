import { all, put } from 'redux-saga/effects';
import handleError from 'api/handle-error';
import { ActionWithPayload, ComplexObject } from 'types/index';
import { hideLoader, showAlert, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import createAction, { actions } from 'store/actions';
import { seSt } from 'services/index';

export interface WatchCreateProject extends ActionWithPayload<any> {
  projectInfo: ComplexObject;
  contractorDetails: ComplexObject;
  ownerDetails: ComplexObject;
  otherSupervisorsInfo: ComplexObject;
}

export function* watchCreateProject({ payload }: WatchCreateProject): Generator<object> {
  try {
    yield put(showLoader());

    const { projectInfo, contractorDetails, ownerDetails, otherSupervisorsInfo } = payload;
    const { res }: any = yield axiosReq.post('Project', {
      data: {
        proName: projectInfo.name,
        proNumber: projectInfo.fileNo,
        proAddress: projectInfo.address,
        proDate: '2021-07-27T11:14:23.085Z',
        proSpace: +projectInfo.areaSize || 0,
        builderName: contractorDetails.fullName,
        builderMobile: contractorDetails.phone,
        builderAddress: contractorDetails.address,
        landownerName: ownerDetails.fullName,
        landownerMobile: ownerDetails.phone,
        landownerAddress: ownerDetails.address,
        supervisors: otherSupervisorsInfo,
      },
    });

    if (!!res?.success) {
      seSt.set('projectID', res.id);
      yield all([
        put(showAlert('success', 'با موفقیت ثبت شد')),
        put(
          createAction(actions.CHANGE_PROJECT_STEP, {
            id: res.id,
            step: '/field',
          })
        ),
      ]);

      location.href = '/field';
    }
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
