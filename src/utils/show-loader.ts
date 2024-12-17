import createAction, { actions } from 'store/actions';

export function showLoader() {
  return createAction(actions.SHOW_LOADER);
}

export function hideLoader() {
  return createAction(actions.HIDE_LOADER);
}
