import { HYDRATE } from 'next-redux-wrapper';
import { actions } from '../actions';
import { ComplexObject } from 'types/index';
import { kookie } from 'services/index';

export interface UserType {
  userData: ComplexObject;
  phone: string;
  token: string;
  userId: string;
  isLoggedIn: () => boolean;
}

const initialState = {
  userData: {},
  userId: kookie.get('userId') || '',
  phone: kookie.get('phone') || '',
  token: kookie.get('token') || '',
  isLoggedIn() {
    return !!kookie.get('token');
  },
};

export function user(state: UserType = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user };
    case actions.SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case actions.GET_USER_DATA:
      return { ...state, phone: kookie.get('phone'), token: kookie.get('token'), userId: kookie.get('userId') };
    case actions.SET_USER_DATA:
      return { initialState };
    case actions.RESET_USER_DATA:
      return { initialState };
    default:
      return state;
  }
}
