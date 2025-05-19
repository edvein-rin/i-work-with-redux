import type { State } from '../state';

export const selectCurrentCustomerMoney = (state: State) =>
  state.currentCustomer?.money;
