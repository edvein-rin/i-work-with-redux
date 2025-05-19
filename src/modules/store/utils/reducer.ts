import { Action } from 'redux';
import { faker } from '@faker-js/faker';

import type { Product } from '@/modules/product';
import { generateCustomerQuote, type Customer } from '@/modules/customer';
import { generateAsciiFace } from '@/modules/shared';

import {
  isSetCurrentChangeAction,
  isSetCurrentTotalAction,
  isSetProductsAction,
  isStartGameAction,
} from './actions';
import { initialState } from './initialState';
import type { State } from './state';

export const reducer = (state = initialState, action: Action): State => {
  if (isSetProductsAction(action)) {
    return {
      ...state,
      products: action.payload,
    };
  }

  if (isStartGameAction(action)) {
    if (!state.products?.length) {
      console.error('No products available to start the game');
      return state;
    }

    const products: Product[] = faker.helpers.arrayElements(
      state.products,
      faker.number.int({ min: 1, max: Math.min(3, state.products.length) })
    );
    const productsPrice = products.reduce(
      (accumulator, product) => accumulator + product.price,
      0
    );

    const money =
      Math.round(
        (productsPrice +
          productsPrice * faker.number.float({ min: 0.1, max: 0.5 }) +
          Number.EPSILON) *
          100
      ) / 100;

    const currentCustomer: Customer = {
      name: faker.person.fullName(),
      asciiImage: generateAsciiFace(),
      quote: generateCustomerQuote(),
      products,
      money,
    };

    return {
      ...state,
      currentCustomer,
      currentChange: 0,
      currentTotal: 0,
    };
  }

  if (isSetCurrentTotalAction(action)) {
    return {
      ...state,
      currentTotal: Math.max(action.payload, 0),
    };
  }

  if (isSetCurrentChangeAction(action)) {
    return {
      ...state,
      currentChange: Math.max(action.payload, 0),
    };
  }

  return state;
};
