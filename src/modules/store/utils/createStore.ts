import { applyMiddleware, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';

import { reducer } from './reducer';
import { loggerMiddleware } from './middlewares';

export const createStore = () => {
  return legacy_createStore(reducer, applyMiddleware(thunk, loggerMiddleware));
};
