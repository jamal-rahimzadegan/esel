import { HYDRATE } from 'next-redux-wrapper';
import { actions } from 'store/actions';

export interface NotifyState {
  msg: string;
  alertType: string;
  isShowAlert?: boolean;
  isAutoClose?: boolean;
  timeout?: number;
  isLoading?: boolean;
}

const initialState = {
  msg: '',
  alertType: 'info',
  isShowAlert: false,
  isAutoClose: true,
  timeout: 3000, // in ms
  isLoading: null,
};

export function notify(state: NotifyState = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.notify };
    case actions.SHOW_ALERT:
      const { msg, alertType, timeout = 3000 } = action.payload;
      return { ...state, isShowAlert: true, msg, alertType, timeout };
    case actions.HIDE_ALERT:
      return { ...state, isShowAlert: false };
    case actions.SHOW_LOADER:
      return { ...state, isLoading: true };
    case actions.HIDE_LOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
