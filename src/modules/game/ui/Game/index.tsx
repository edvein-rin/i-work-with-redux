import { useEffect, useRef } from 'react';

import { isDevelopment } from '@/modules/shared/utils';
import { styles } from '@/modules/shared';
import {
  useAppDispatch,
  useAppSelector,
  loadProducts,
  selectProducts,
  startGame,
  selectCurrentCustomer,
  selectCurrentExchange,
  selectIsGameStarted,
} from '@/modules/store';
import { ProductList, ProductListItem } from '@/modules/product';

export const Game = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const currentCustomer = useAppSelector(selectCurrentCustomer);
  const currentExchange = useAppSelector(selectCurrentExchange);
  const isGameStarted = useAppSelector(selectIsGameStarted);

  const wasLoadingRequestSentReference = useRef(false);

  useEffect(() => {
    const wasLoadingRequestSent = wasLoadingRequestSentReference.current;
    if (products === undefined && (!wasLoadingRequestSent || isDevelopment)) {
      dispatch(loadProducts);
      wasLoadingRequestSentReference.current = true;
    }

    if (products && !isGameStarted) {
      dispatch(startGame());
    }
  }, [dispatch, isGameStarted, products]);

  return (
    <main
      className={styles(
        'min-w-full min-h-full',
        'p-8',
        'flex flex-col items-center justify-center'
      )}
    >
      {products === undefined && 'LOADING...'}
      {products !== undefined &&
        products.length === 0 &&
        'NO PRODUCTS LOADED BECAUSE A FREE API A BAKA DEVELOPER USING IS NOT WORKING ANYMORE :c'}
      {products !== undefined && products.length > 0 && (
        <div className="flex flex-col gap-16">
          <div>
            <span>CUSTOMER</span>
            <div className="flex justify-between gap-4 mt-4">
              <span>{currentCustomer?.name}</span>
              <span>${currentCustomer?.money}</span>
            </div>
          </div>
          <div>
            <span>BASKET</span>
            <ProductList className="mt-4">
              {currentCustomer?.products.map((product) => (
                <ProductListItem
                  key={product.id}
                  name={product.name}
                  price={product.price}
                />
              ))}
            </ProductList>
            <hr />
            <div className="flex justify-between gap-4 mt-1">
              <span>TOTAL</span>
              <span>?</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between gap-4">
              <span>NEEDED EXCHANGE</span>
              <span>?</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>CURRENT EXCHANGE</span>
              <span>{currentExchange}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
