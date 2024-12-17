import axiosReq from 'services/api-service';
import handleError from 'api/handle-error';

export interface Payload {
  payload: {
    id: string;
    step: string;
  };
}

export function* watchChangeStep({ payload }: Payload): Generator<object> {
  try {
    yield axiosReq.put(`Project/ChangeStepProject`, {
      data: {
        projectID: payload.id,
        proStep: payload.step,
      },
    });
  } catch (e) {
    yield handleError(e);
  }
}
