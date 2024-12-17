import { put } from 'redux-saga/effects';
import { ActionWithPayload, ComplexObject } from 'types/index';
import { hideLoader, showLoader } from 'utils/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

export interface WatchGetLevels extends ActionWithPayload<any> {
  cb: Function;
  id?: string;
  parentId?: string;
  data?: ComplexObject[];
  level: 0 | 1 | 2 | 3;
  isQuick: boolean;
}

export function* watchGetLevels({ payload }: WatchGetLevels): Generator<object> {
  try {
    const { cb, level, data, id = 0, parentId, isQuick } = payload;

    yield put(showLoader());

    const { res }: any = yield axiosReq.post('level', {
      data: {
        id,
        levelNumber: level,
        isQuick,
      },
    });

    let levelItems = res.levels.titels;

    if (level === 0) cb(levelItems);

    if (level === 1) {
      levelItems.forEach((el) => (el.children = []));
      cb?.(levelItems);
    }

    if (level === 2) {
      levelItems.forEach((el) => (el.children = []));
      let newData = [...data];
      let target = newData.find((el) => el.id === id);
      target.children = levelItems;
      cb?.(newData);
    }

    if (level === 3) {
      let newData = [...data];
      let targetParent = newData.find((el) => el.id === parentId);
      let targetChild = targetParent.children.find((el) => el.id === id);
      targetChild.children = levelItems;
      cb?.(newData);
    }
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
