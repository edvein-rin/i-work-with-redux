import { Action } from 'redux';

import type { Money } from '@/modules/money';

const SetCurrentTotalActionType = 'currentTotal/set';

export interface SetCurrentTotalAction extends Action {
  type: typeof SetCurrentTotalActionType;
  payload: Money;
}

export const isSetCurrentTotalAction = (
  action: Action
): action is SetCurrentTotalAction => {
  return action.type === SetCurrentTotalActionType;
};

export const setCurrentTotal = (
  currentTotal: Money
): SetCurrentTotalAction => ({
  type: SetCurrentTotalActionType,
  payload: currentTotal,
});
