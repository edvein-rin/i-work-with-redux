import { Action } from 'redux';

import { Product } from '@/modules/product';

const SetProductsActionType = 'products/set';

export interface SetProductsAction extends Action {
  type: typeof SetProductsActionType;
  payload: Product[] | undefined;
}

export const isSetProductsAction = (
  action: Action
): action is SetProductsAction => {
  return action.type === SetProductsActionType;
};

export const setProducts = (
  products: Product[] | undefined
): SetProductsAction => ({
  type: SetProductsActionType,
  payload: products,
});
