import { Action, Dispatch } from 'redux';
import { z } from 'zod';

import { Product } from '@/modules/product';

import { setProducts } from '../actions/setProducts';
import { isDevelopment } from '@/modules/shared/utils';

export const loadProducts = (dispatch: Dispatch<Action>) => {
  if (isDevelopment) {
    dispatch(
      setProducts([
        {
          id: 1,
          name: 'Essence Mascara Lash Princess',
          price: 9.99,
        },
        {
          id: 2,
          name: 'Eyeshadow Palette with Mirror',
          price: 19.99,
        },
        {
          id: 3,
          name: 'Powder Canister',
          price: 14.99,
        },
        {
          id: 4,
          name: 'Red Lipstick',
          price: 12.99,
        },
        {
          id: 5,
          name: 'Red Nail Polish',
          price: 8.99,
        },
        {
          id: 6,
          name: 'Calvin Klein CK One',
          price: 49.99,
        },
        {
          id: 7,
          name: 'Chanel Coco Noir Eau De',
          price: 129.99,
        },
        {
          id: 8,
          name: "Dior J'adore",
          price: 89.99,
        },
        {
          id: 9,
          name: 'Dolce Shine Eau de',
          price: 69.99,
        },
        {
          id: 10,
          name: 'Gucci Bloom Eau de',
          price: 79.99,
        },
        {
          id: 11,
          name: 'Annibale Colombo Bed',
          price: 1899.99,
        },
        {
          id: 12,
          name: 'Annibale Colombo Sofa',
          price: 2499.99,
        },
        {
          id: 13,
          name: 'Bedside Table African Cherry',
          price: 299.99,
        },
        {
          id: 14,
          name: 'Knoll Saarinen Executive Conference Chair',
          price: 499.99,
        },
        {
          id: 15,
          name: 'Wooden Bathroom Sink With Mirror',
          price: 799.99,
        },
        {
          id: 16,
          name: 'Apple',
          price: 1.99,
        },
        {
          id: 17,
          name: 'Beef Steak',
          price: 12.99,
        },
        {
          id: 18,
          name: 'Cat Food',
          price: 8.99,
        },
        {
          id: 19,
          name: 'Chicken Meat',
          price: 9.99,
        },
        {
          id: 20,
          name: 'Cooking Oil',
          price: 4.99,
        },
        {
          id: 21,
          name: 'Cucumber',
          price: 1.49,
        },
        {
          id: 22,
          name: 'Dog Food',
          price: 10.99,
        },
        {
          id: 23,
          name: 'Eggs',
          price: 2.99,
        },
        {
          id: 24,
          name: 'Fish Steak',
          price: 14.99,
        },
        {
          id: 25,
          name: 'Green Bell Pepper',
          price: 1.29,
        },
        {
          id: 26,
          name: 'Green Chili Pepper',
          price: 0.99,
        },
        {
          id: 27,
          name: 'Honey Jar',
          price: 6.99,
        },
        {
          id: 28,
          name: 'Ice Cream',
          price: 5.49,
        },
        {
          id: 29,
          name: 'Juice',
          price: 3.99,
        },
        {
          id: 30,
          name: 'Kiwi',
          price: 2.49,
        },
      ])
    );
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
        dispatch(setProducts([]));
        return;
      }

      const products: Product[] = dataParseResult.data.products.map(
        (product) => {
          return {
            id: product.id,
            name: product.title,
            price: product.price,
          };
        }
      );

      dispatch(setProducts(products));
    });
};
