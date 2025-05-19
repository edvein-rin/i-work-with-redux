import type { Money } from '@/modules/money';
import type { Product } from '@/modules/product';

export type Customer = {
  name: string;
  money: Money;
  products: Product[];
  asciiImage: string;
  quote: string;
};
