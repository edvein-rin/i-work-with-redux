import { Action, Dispatch } from 'redux';
import { z } from 'zod';
import { faker } from '@faker-js/faker';

import { Product } from '@/modules/product';
import { isDevelopment } from '@/modules/shared';

import { setProducts } from '../actions/setProducts';

import DEFAULT_PRODUCTS from './defaultProducts.json';

export const loadProducts = (dispatch: Dispatch<Action>) => {
  if (isDevelopment) {
    console.log('Development mode detected');
    console.log('Falling back to default products');
    dispatch(setProducts(DEFAULT_PRODUCTS));
    return;
  }

  fetch('https://dummyjson.com/products')
    .then((response) => response.json())
    .then((data) => {
      const dataParseResult = z
        .object({
          products: z.array(
            z.object({
              id: z.number(),
              title: z.string(),
              price: z.number(),
            })
          ),
        })
        .safeParse(data);
      if (dataParseResult.success === false) {
        console.error('Invalid data format', dataParseResult.error);
        console.log('Falling back to default products');
        dispatch(setProducts(DEFAULT_PRODUCTS));
        return;
      }

      const products: Product[] = dataParseResult.data.products.map(
        (product) => {
          const correctedPrice =
            Math.round(
              (product.price +
                faker.number.float({ min: 0, max: 1, fractionDigits: 2 }) +
                Number.EPSILON) *
                100
            ) / 100;

          return {
            id: product.id,
            name: product.title,
            price: correctedPrice,
          };
        }
      );

      dispatch(setProducts(products));
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
      console.log('Falling back to default products');
      dispatch(setProducts(DEFAULT_PRODUCTS));
    });
};
