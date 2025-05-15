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
        <div className="text-center">
          <h1>PRODUCTS</h1>
          <div className="mt-2">{JSON.stringify(products)}</div>
          <h2 className="mt-2">CURRENT CUSTOMER</h2>
          <div className="mt-2">{JSON.stringify(currentCustomer)}</div>
          <h2 className="mt-2">CURRENT EXCHANGE</h2>
          <div className="mt-2">{currentExchange}</div>
        </div>
      )}
    </main>
  );
};
