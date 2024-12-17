import { combineReducers } from 'redux';
import { user } from './user';
import { theme } from './theme';
import { notify } from './notify';

export const rootReducer = combineReducers({
  notify,
  user,
  theme,
});
