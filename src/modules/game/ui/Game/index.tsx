import { useEffect, useRef } from 'react';

import { styles, isDevelopment } from '@/modules/shared';
import {
  useAppDispatch,
  useAppSelector,
  loadProducts,
  selectProducts,
  startGame,
  selectCurrentCustomer,
  selectIsGameStarted,
  selectIsGameWon,
} from '@/modules/store';
import { CustomerCard } from '@/modules/customer';

import { GameLogo } from '../GameLogo';
import { GameReceipt } from '../GameReceipt';
import { GameHints } from '../GameHints';

export const Game = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectProducts);
  const currentCustomer = useAppSelector(selectCurrentCustomer);
  const isGameStarted = useAppSelector(selectIsGameStarted);
  const isGameWon = useAppSelector(selectIsGameWon);

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

  useEffect(() => {
    if (isGameWon) {
      setTimeout(() => {
        dispatch(startGame());
      }, 2500);
    }
  }, [dispatch, isGameWon]);

  return (
    <main
      className={styles(
        'min-w-full min-h-full',
        'p-8',
        'flex flex-col items-center justify-center gap-20'
      )}
    >
      <GameLogo className="hidden 2xl:block" />
      {products === undefined && 'LOADING...'}
      {products !== undefined &&
        products.length === 0 &&
        'NO PRODUCTS LOADED BECAUSE A FREE API A BAKA DEVELOPER USING IS NOT WORKING ANYMORE :c'}
      {currentCustomer && (
        <div className="flex flex-col 2xl:flex-row items-center gap-16 2xl:gap-32 max-w-full">
          <div className="min-w-0 w-[500px] max-w-full">
            <CustomerCard
              name={currentCustomer.name}
              asciiImage={currentCustomer.asciiImage}
              quote={currentCustomer.quote}
            />
          </div>
          <div
            className={styles(
              'flex flex-col gap-8',
              'min-w-0 w-[500px] max-w-full'
            )}
          >
            <GameReceipt />
            <span className="text-xs">
              P.S. If you fill everything right it will be submitted
              automatically.
            </span>
          </div>
          <div className="min-w-0 w-[500px] max-w-full">
            <GameHints />
          </div>
        </div>
      )}
    </main>
  );
};
