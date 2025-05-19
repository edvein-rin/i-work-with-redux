import { useEffect, useRef } from 'react';

import { styles, isDevelopment } from '@/modules/shared';
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
import { CustomerCard } from '@/modules/customer';
import { ReceiptCard } from '@/modules/receipt';

const GAME_LOGO =
  '    ____                       __               _ __  __       ____           __          \r\n   /  _/  _      ______  _____/ /__   _      __(_) /_/ /_     / __ \\___  ____/ /_  ___  __\r\n   / /   | | /| / / __ \\/ ___/ //_/  | | /| / / / __/ __ \\   / /_/ / _ \\/ __  / / / / |/_/\r\n _/ /    | |/ |/ / /_/ / /  / ,<     | |/ |/ / / /_/ / / /  / _, _/  __/ /_/ / /_/ />  <  \r\n/___/    |__/|__/\\____/_/  /_/|_|    |__/|__/_/\\__/_/ /_/  /_/ |_|\\___/\\__,_/\\__,_/_/|_|  \r\n                                                                                          \r\n\r\n';

export const Game = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const currentCustomer = useAppSelector(selectCurrentCustomer);
  const currentChange = useAppSelector(selectCurrentExchange);
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
        'flex flex-col items-center justify-center gap-16'
      )}
    >
      <div className="hidden 2xl:block whitespace-pre">{GAME_LOGO}</div>
      {products === undefined && 'LOADING...'}
      {products !== undefined &&
        products.length === 0 &&
        'NO PRODUCTS LOADED BECAUSE A FREE API A BAKA DEVELOPER USING IS NOT WORKING ANYMORE :c'}
      {currentCustomer && (
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32 max-w-full">
          <div className="min-w-0 w-[500px] max-w-full">
            <CustomerCard
              name={currentCustomer.name}
              asciiImage={currentCustomer.asciiImage}
              quote={currentCustomer.quote}
            />
          </div>
          <div className="min-w-0 w-[500px] max-w-full">
            <ReceiptCard
              products={currentCustomer.products}
              cash={currentCustomer.money}
              change={currentChange}
            />
          </div>
          <div className="min-w-0 w-[500px] max-w-full">game-controls</div>
        </div>
      )}
    </main>
  );
};
