import { Action, legacy_createStore } from 'redux';

import { isSetProductsAction } from './actions';
import { initialState } from './initialState';

const storeReducer = (state = initialState, action: Action) => {
  if (isSetProductsAction(action)) {
    return {
      ...state,
      products: action.payload,
    };
  }

  return state;
};

export const createStore = () => {
  return legacy_createStore(storeReducer);
};
