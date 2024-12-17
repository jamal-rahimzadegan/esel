import { ComplexObject } from 'types';

export default class SharedReducer {
  name: string;
  initialState: ComplexObject;
  sagaAction: ComplexObject;
  reducer: Function;
  requestActions: ComplexObject;

  constructor(name) {
    this.name = name;
    this.initialState = {};
    this.sagaAction = {}; // use it only in saga
    this.reducer = (state, action) => {};
    this.requestActions = {}; // use it only in client side for handling request (and also response)

    this.createInitialStateAndActions();
    this.createReducer();
  }

  createInitialStateAndActions = () => {
    this.sagaAction = {
      ...this.sagaAction,
      fetch: `${this.name}/FETCH`,
      successFetch: `${this.name}/SUCCESS_FETCH`,
      failFetch: `${this.name}/FAILED_FETCH`,
    };

    this.initialState = {
      fetching: false,
      fetched: false,
      error: {},
      data: {},
      form: {},
    };

    const { fetch, successFetch, failFetch } = this.sagaAction;

    this.requestActions = {
      ...this.requestActions,
      fetch: (payload = {}) => ({
        type: fetch,
        payload,
      }),
      successFetch: (payload = {}) => ({
        type: successFetch,
        payload,
      }),
      failFetch: (payload = {}) => ({
        type: failFetch,
        payload,
      }),
    };
  };

  createReducer = () => {
    this.reducer = (state = this.initialState, action) => {
      switch (action.type) {
        case `${this.name}/FETCH`:
          return {
            ...state,
            fetching: true,
            fetched: false,
            form: action.payload,
          };
        case `${this.name}/SUCCESS_FETCH`:
          return {
            ...state,
            fetching: false,
            fetched: true,
            data: action.payload,
          };
        case `${this.name}/FAILED_FETCH`:
          return {
            ...state,
            fetching: false,
            fetched: true,
            error: action.payload,
          };
        case `${this.name}/RESET_DATA`:
          return this.initialState;
        default:
          return state;
      }
    };
  };
}
