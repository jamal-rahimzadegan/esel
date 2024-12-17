export const actions = {
  SET_DARK_THEME: 'SET_DARK_THEME',
  SET_LIGHT_THEME: 'SET_LIGHT_THEME',

  SHOW_ALERT: 'SHOW_ALERT',
  HIDE_ALERT: 'HIDE_ALERT',

  SHOW_LOADER: 'SHOW_LOADER',
  HIDE_LOADER: 'HIDE_LOADER',

  OPEN_DRAWER: 'OPEN_DRAWER',
  CLOSE_DRAWER: 'CLOSE_DRAWER',
  //----user data---------
  WATCH_GET_PROFILE: 'WATCH_GET_PROFILE',
  WATCH_UPDATE_PROFILE: 'WATCH_UPDATE_PROFILE',
  SET_USER_DATA: 'SET_USER_DATA',
  RESET_USER_DATA: 'RESET_USER_DATA',
  GET_USER_DATA: 'GET_USER_DATA',
  SET_TOKEN: 'SET_TOKEN',
  WATCH_LOGIN: 'WATCH_LOGIN',
  WATCH_SIGN_UP: 'WATCH_SIGN_UP',
  WATCH_SYNC_USER_DATA: 'WATCH_SYNC_USER_DATA',
  GET_TICKET_DETAILS: 'GET_TICKET_DETAILS',
  GET_TICKET: 'GET_TICKET',
  SEND_TICKET: 'SEND_TICKET',
  //  ----level and levels-------------------------
  WATCH_GET_LEVELS: 'WATCH_GET_LEVELS',
  GET_CONTENT: 'GET_CONTENT',
  GET_ORDER: 'GET_ORDER',
  DOWNLOAD_PDF_ORDER: 'DOWNLOAD_PDF_ORDER',
  GET_CHECK_LIST: 'GET_CHECK_LIST',
  //  ----misc-------------------------
  BOOKS: 'BOOKS',
  GET_ADVERTISE: 'GET_ADVERTISE',
  SAGA_ERROR: 'SAGA_ERROR',
  COUNTER: 'COUNTER',
  //  ----project-------------------------
  WATCH_CREATE_PROJECT: 'WATCH_CREATE_PROJECT',
  WATCH_GET_PROJECTS: 'WATCH_GET_PROJECTS',
  WATCH_UPDATE_PROJECT: 'WATCH_UPDATE_PROJECT',
  WATCH_DELETE_PROJECT: 'WATCH_DELETE_PROJECT',
  GET_DOCS: 'GET_DOCS',
  UPLOAD_DOC: 'UPLOAD_DOC',
  FINISH_PROJECT: 'FINISH_PROJECT',
  CHANGE_PROJECT_STEP: 'CHANGE_PROJECT_STEP',
};

//-----Action creator function ----------------------------------------------------------

type ActionType = {
  type: string;
  payload: object;
};

export default function createAction(type: keyof typeof actions | string, payload: object = {}): ActionType {
  return {
    type,
    payload,
  };
}
