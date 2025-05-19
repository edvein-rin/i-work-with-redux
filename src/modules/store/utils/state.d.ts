import type { Customer } from '@/modules/customer';
import type { Product } from '@/modules/product';

export type State = {
  products: Product[] | undefined;
  currentCustomer: Customer | undefined;
  currentChange: number;
};
