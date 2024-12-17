import { put } from 'redux-saga/effects';
import { ActionWithPayload } from 'types';
import { hideLoader, showLoader } from 'utils';
import axiosReq from 'services/api-service';
import { kookie } from 'services/index';
import createAction, { actions } from 'store/actions';
import handleError from '../../handle-error';

export interface WatchLoginPayload extends ActionWithPayload<any> {
  navigate?: (b: string) => {};
  setIsShowCode?: (b: boolean) => {};
  phone: string;
  step: string;
}

export function* watchLogin({ payload }: WatchLoginPayload): Generator<object> {
  try {
    const { setIsShowCode, phone, code, step, navigate } = payload;
    yield put(showLoader());

    if (step === 'check') {
      const { res }: any = yield axiosReq.post('Code/send_code', {
        data: {
          number: phone,
        },
      });

      if (res.success) {
        kookie.set('phone', phone);
        setIsShowCode(true);
      } else throw new Error('Not verified');
    }

    if (step === 'verify') {
      const { res }: any = yield axiosReq.post('Security/Token', {
        data: {
          mobile: phone,
          code,
        },
      });

      if (res.success) {
        kookie.set('token', res.token, { secure: true, httpOnly: true });

        // signup if it's a new user
        if (res.newUser) yield put(createAction(actions.WATCH_SIGN_UP));

        navigate('/home');
      } else throw new Error('Not verified');
    }
  } catch (e) {
    yield handleError(e);
  } finally {
    yield put(hideLoader());
  }
}
