import { formatMoney } from '@/modules/money';
import { styles } from '@/modules/shared';
import { selectCurrentCustomer, useAppSelector } from '@/modules/store';
import {
  selectActualChange,
  selectActualTotal,
  selectIsActualChangeEqualToCurrentChange,
  selectIsActualTotalEqualToCurrentTotal,
} from '@/modules/store/utils';

export type GameHintsProps = {
  className?: string;
};

export const GameHints = ({ className }: GameHintsProps) => {
  const currentCustomer = useAppSelector(selectCurrentCustomer);
  const actualTotal = useAppSelector(selectActualTotal);
  const isActualTotalEqualToCurrentTotal = useAppSelector(
    selectIsActualTotalEqualToCurrentTotal
  );
  const actualChange = useAppSelector(selectActualChange);
  const isActualChangeEqualToCurrentChange = useAppSelector(
    selectIsActualChangeEqualToCurrentChange
  );

  if (currentCustomer === undefined || actualTotal === undefined) {
    return null;
  }

  const customerProductsSortedByPrice = [...currentCustomer.products].sort(
    (a, b) => b.price - a.price
  );

  return (
    <div className={styles(className)}>
      <div className="flex flex-col gap-4 text-center">
        <span>MENTAL HINTS</span>
        <span>It's up to you wether to use them or not.</span>
      </div>
      <div className="flex justify-center gap-8 mt-8">
        <div className="flex flex-col">
          <span className="text-right">TOTAL</span>
          <ul className="flex flex-col items-end">
            {customerProductsSortedByPrice.map((product, index) => (
              <li key={product.id} className="flex justify-between gap-2">
                <span>{index !== 0 && '+'}</span>
                <span>{product.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr />
          <span className="text-right">
            {isActualTotalEqualToCurrentTotal ? formatMoney(actualTotal) : '?'}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-right">CHANGE</span>
          <ul className="flex flex-col items-end">
            <li>{currentCustomer.money.toFixed(2)}</li>
            <li className="flex justify-between gap-2">
              <span>-</span>
              <span>
                {isActualTotalEqualToCurrentTotal
                  ? actualTotal.toFixed(2)
                  : '?'}
              </span>
            </li>
          </ul>
          <hr />
          <span className="text-right">
            {isActualChangeEqualToCurrentChange && actualChange !== undefined
              ? formatMoney(actualChange)
              : '?'}
          </span>
        </div>
      </div>
    </div>
  );
};
