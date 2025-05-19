import type { State } from '../state';
import { selectActualTotal } from './selectActualTotal';

export const selectIsActualChangeEqualToCurrentChange = (state: State) => {
  if (
    state.currentChange === undefined ||
    state.currentCustomer === undefined
  ) {
    return undefined;
  }

  const actualTotal = selectActualTotal(state);
  if (actualTotal === undefined) {
    return undefined;
  }

  return (
    Math.abs(state.currentCustomer.money - actualTotal - state.currentChange) <=
    Number.EPSILON * 1000
  );
};
