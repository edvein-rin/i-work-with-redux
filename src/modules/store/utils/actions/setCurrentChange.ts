import { Action } from 'redux';

import type { Money } from '@/modules/money';

const SetCurrentChangeActionType = 'currentChange/set';

export interface SetCurrentChangeAction extends Action {
  type: typeof SetCurrentChangeActionType;
  payload: Money;
}

export const isSetCurrentChangeAction = (
  action: Action
): action is SetCurrentChangeAction => {
  return action.type === SetCurrentChangeActionType;
};

export const setCurrentChange = (
  currentChange: Money
): SetCurrentChangeAction => ({
  type: SetCurrentChangeActionType,
  payload: currentChange,
});
