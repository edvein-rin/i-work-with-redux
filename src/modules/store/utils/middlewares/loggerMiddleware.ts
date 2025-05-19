import { Middleware } from 'redux';

export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  const actionType =
    action !== null && typeof action === 'object' && 'type' in action
      ? action.type
      : 'UNKNOWN_ACTION';
  console.group(actionType);
  console.log('Dispatching', action);

  const result = next(action);

  console.log('Next state', store.getState());
  console.groupEnd();

  return result;
};
