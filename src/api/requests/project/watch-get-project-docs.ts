import { ActionWithPayload } from 'types/index';
import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

export interface Payload extends ActionWithPayload<any> {
  id: string;
  cb: Function;
}

export function* watchGetPorjectDocs({ payload }: Payload): Generator<object> {
  try {
    const { id, cb } = payload;
    const { res }: any = yield axiosReq.get(`Documents/GetListByProjectID/${id}`);
    if (!!res?.success) cb(res.result);
  } catch (e) {
    yield handleError(e, 'watch get docs');
  }
}
