import { z } from 'zod';

import { Money } from '@/modules/money';

export type Product = {
  id: number;
  name: string;
  price: Money;
};

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});
