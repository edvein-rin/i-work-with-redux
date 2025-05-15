import { Action } from 'redux';

const StartGameActionType = 'game/start';

export interface StartGameAction extends Action {
  type: typeof StartGameActionType;
}

export const isStartGameAction = (
  action: Action
): action is StartGameAction => {
  return action.type === StartGameActionType;
};

export const startGame = (): StartGameAction => ({
  type: StartGameActionType,
});
