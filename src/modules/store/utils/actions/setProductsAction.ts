import { Action } from 'redux';

import { Product } from '@/modules/product';

export interface SetProductsAction extends Action {
  type: 'products/set';
  payload: Product[] | undefined;
}

export const isSetProductsAction = (
  action: Action
): action is SetProductsAction => {
  // TODO: validate payload.
  return action.type === 'products/set';
};
