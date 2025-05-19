import type { State } from '../state';

export const selectActualChange = (state: State) => {
  if (
    state.currentChange === undefined ||
    state.currentCustomer === undefined
  ) {
    return undefined;
  }

  const actualTotal = state.currentCustomer?.products.reduce(
    (acc, product) => acc + product.price,
    0
  );
  if (actualTotal === undefined) {
    return undefined;
  }

  return state.currentCustomer.money - actualTotal;
};
