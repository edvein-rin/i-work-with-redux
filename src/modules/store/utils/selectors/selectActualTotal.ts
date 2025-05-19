import type { State } from '../state';

export const selectActualTotal = (state: State) =>
  state.currentCustomer?.products.reduce(
    (acc, product) => acc + product.price,
    0
  );
