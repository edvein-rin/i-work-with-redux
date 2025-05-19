import type { Product } from '@/modules/product';

export type Customer = {
  name: string;
  money: number;
  products: Product[];
  asciiImage: string;
  quote: string;
};
