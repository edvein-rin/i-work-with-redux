import type { State } from '../state';

export const selectIsGameStarted = (state: State) =>
  state.currentCustomer !== undefined;
