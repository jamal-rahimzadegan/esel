import { ReactNode } from 'react';
import { HYDRATE } from 'next-redux-wrapper';
import { actions } from '../actions';
import { lockScroll } from 'utils/index';
import { kookie } from 'services/index';

interface ThemeType {
  theme?: string;
  isShowDrawer: boolean | null;
}

const initialState = {
  theme: kookie.get('theme') || '',
  isShowDrawer: null,
};

export function theme(state: ThemeType = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.theme };
    case actions.SET_LIGHT_THEME:
      kookie.set('theme', 'light');
      return { ...state, theme: 'light' };
    case actions.SET_DARK_THEME:
      kookie.set('theme', 'dark');
      return { ...state, theme: 'dark' };
    //  drawer---------------------------------------
    case actions.OPEN_DRAWER:
      return { ...state, isShowDrawer: true };
    case actions.CLOSE_DRAWER:
      return { ...state, isShowDrawer: state.isShowDrawer === null ? null : false };
    default:
      return state;
  }
}
