import { z } from 'zod';

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});
