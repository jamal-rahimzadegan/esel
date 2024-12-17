import createAction, { actions } from 'store/actions';

type AlertTypes = 'warn' | 'err' | 'success' | 'info';

export default function showAlert(alertType: AlertTypes, msg: string, timeout?: number) {
  return createAction(actions.SHOW_ALERT, { alertType, msg, timeout });
}
