import { put } from 'redux-saga/effects';
import { showAlert } from 'utils/index';
import { kookie } from 'services/index';
import logout from 'utils/logout';

export default function* handleError(e: any, target: string = ''): Generator<any> {
  const { message, status } = e || {};
  let msg: string = '';

  if (message === 'Network Error') msg = 'خطا در ارتباط لطفا دوباره تلاش کنید';

  switch (status) {
    case 400:
      yield put(showAlert('err', 'خطا لطفا دوباره تلاش کنید'));
      break;
    case 401:
      msg = 'بازه زمانی کار با سرویس پایان یافته، لطفا دوباره وارد شوید';
      console.warn(`--- expired token ----> `);
      yield put(showAlert('err', msg));

      if (process.env.NODE_ENV !== 'production') return;

      logout();

      break;
    case 403:
      msg = 'متاسفانه شما اجازه دسترسی ندارید';
      break;
    case 404:
      msg = 'موردی یافت نشد';
      break;
    default:
      // msg = 'خطایی رخ داده، لطفا دوباره تلاش کنید';
      break;
  }

  // @ts-ignore
  // if (!msg) return;
  //
  // yield typeof window !== 'undefined'
  //   ? put(showAlert('err', msg))
  //   : console.error(`error in ${target || ''} request: `, e);

  console.error(`error in ${target || ''} request: `, e);
}
