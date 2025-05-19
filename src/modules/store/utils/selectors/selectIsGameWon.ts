import type { State } from '../state';

import { selectIsActualChangeEqualToCurrentChange } from './selectIsActualChangeEqualToCurrentChange';
import { selectIsActualTotalEqualToCurrentTotal } from './selectIsActualTotalEqualToCurrentTotal';

export const selectIsGameWon = (state: State) =>
  !!selectIsActualTotalEqualToCurrentTotal(state) &&
  !!selectIsActualChangeEqualToCurrentChange(state);
