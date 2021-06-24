/** Библиотеки */
import {
  createStore,
  applyMiddleware,
  Middleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

/** Reducer */
import { treeReducer } from './reducers/treeReducer';

/** Создаёт store с middleware */
const configureStore = () => {
  // Сюда при необходимости можно будет добавить logger, historyMiddleware
  const middlewares = [
    thunk,
  ];

  const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares as Middleware[]),
  )(createStore);

  return createStoreWithMiddleware(treeReducer);
};

export const store = configureStore();
