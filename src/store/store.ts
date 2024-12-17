import { applyMiddleware, createStore, Store } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { RootStateOrAny } from 'react-redux';
import { rootReducer } from './reducers/root-reducer';
import handleSaga from './handle-saga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const store: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  (store as SagaStore).sagaTask = sagaMiddleware.run(handleSaga);
  return store;
};
export const REDUX_WRAPPER = createWrapper<RootStateOrAny>(store);
