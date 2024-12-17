//@ts-nocheck
import { all, takeEvery } from 'redux-saga/effects';
import { actions } from 'store/actions';
import { watchSyncUserData } from 'store/../api/requests/user/watch-sync-user-data';
import { watchLogin } from 'store/../api/requests/user/watch-login';
import { watchGetProfile } from 'store/../api/requests/user/watch-get-profile';
import { watchUpdateProfile } from 'store/../api/requests/user/watch-update-profile';
import { watchCreateProject } from 'store/../api/requests/project/watch-create-project';
import { watchGetProjects } from 'store/../api/requests/project/watch-get-projects';
import { watchUpdateProject } from 'store/../api/requests/project/watch-update-project';
import { watchChangeStep } from 'store/../api/requests/project/watch-change-step';
import { watchDeleteProject } from 'store/../api/requests/project/watch-delete-project';
import { watchGetPorjectDocs } from 'store/../api/requests/project/watch-get-project-docs';
import { watchUploadPorjectDocs } from 'store/../api/requests/project/watch-upload-project-docs';
import { watchFinishProject } from 'store/../api/requests/project/watch-finish-project';
import { watchGetLevels } from 'store/../api/requests/levels/watch-get-levels';
import { watchGetContent } from 'store/../api/requests/content/watch-get-content';
import { watchOrder } from 'store/../api/requests/content/watch-orders';
import { watchPdfFromOrder } from 'store/../api/requests/content/watch-pdf-from-order';
import { watchCheckList } from 'store/../api/requests/content/watch-check-list';
import { watchSignup } from 'api/requests/user/watch-signup';
import { watchGetTickets } from 'api/requests/user/ticket/watch-get-tickets';
import { watchSendTicket } from 'api/requests/user/ticket/watch-send-ticket';
import { watchGetTicketDetails } from 'api/requests/user/ticket/watch-get-ticket-details';

export default function* handleSaga() {
  yield all([
    takeEvery(actions.WATCH_SYNC_USER_DATA, watchSyncUserData),
    takeEvery(actions.WATCH_LOGIN, watchLogin),
    takeEvery(actions.WATCH_SIGN_UP, watchSignup),
    takeEvery(actions.WATCH_GET_PROFILE, watchGetProfile),
    takeEvery(actions.WATCH_UPDATE_PROFILE, watchUpdateProfile),
    takeEvery(actions.GET_TICKET_DETAILS, watchGetTicketDetails),
    takeEvery(actions.GET_TICKET, watchGetTickets),
    takeEvery(actions.SEND_TICKET, watchSendTicket),
    takeEvery(actions.WATCH_CREATE_PROJECT, watchCreateProject),
    takeEvery(actions.WATCH_GET_PROJECTS, watchGetProjects),
    takeEvery(actions.WATCH_UPDATE_PROJECT, watchUpdateProject),
    takeEvery(actions.CHANGE_PROJECT_STEP, watchChangeStep),
    takeEvery(actions.WATCH_DELETE_PROJECT, watchDeleteProject),
    takeEvery(actions.GET_DOCS, watchGetPorjectDocs),
    takeEvery(actions.UPLOAD_DOC, watchUploadPorjectDocs),
    takeEvery(actions.FINISH_PROJECT, watchFinishProject),
    takeEvery(actions.WATCH_GET_LEVELS, watchGetLevels),
    takeEvery(actions.GET_CONTENT, watchGetContent),
    takeEvery(actions.GET_ORDER, watchOrder),
    takeEvery(actions.DOWNLOAD_PDF_ORDER, watchPdfFromOrder),
    takeEvery(actions.GET_CHECK_LIST, watchCheckList),
  ]);
}
