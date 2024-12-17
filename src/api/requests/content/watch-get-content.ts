import { put } from 'redux-saga/effects';
import { hideLoader, showLoader } from 'utils/index';
import { ActionWithPayload } from 'types/index';
import handleError from 'api/handle-error';
import axiosReq from 'services/api-service';
import createAction, { actions } from 'store/actions';
import { seSt } from 'services/index';

export interface WatchGetContent extends ActionWithPayload<any> {
  cb: Function;
  isQuick: boolean; // is in quick access or all
  chapterId: number;
  contentId: string;
}

export function* watchGetContent({ payload }: WatchGetContent): Generator<object> {
  try {
    const { cb, chapterId, contentId, isQuick } = payload;
    yield put(showLoader());

    const data = {
      subChapterID: chapterId, // parent ()
      id: contentId, // children (last level)
      isQuick,
    };

    const { res }: any = yield axiosReq.post('Content', {
      data,
    });

    if (res.success) {
      cb?.(res.cntents);

      if (!seSt.get('projectID')) return; // change project step if a project has been created

      yield put(
        createAction(actions.CHANGE_PROJECT_STEP, {
          id: seSt.get('projectID'),
          step: window.location.pathname,
        })
      );
    }
  } catch (e) {
    yield handleError(e, 'watchGetContent');
  } finally {
    yield put(hideLoader());
  }
}
