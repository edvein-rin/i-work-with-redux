import type { State } from '../state';
import { selectActualTotal } from './selectActualTotal';

export const selectIsActualTotalEqualToCurrentTotal = (state: State) => {
  if (state.currentTotal === undefined) {
    return undefined;
  }

  const actualTotal = selectActualTotal(state);
  if (actualTotal === undefined) {
    return undefined;
  }

  return Math.abs(actualTotal - state.currentTotal) <= Number.EPSILON * 1000;
};
