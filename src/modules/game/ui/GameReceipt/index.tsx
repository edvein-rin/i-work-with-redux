import { formatMoney } from '@/modules/money';
import { ProductList, ProductListItem } from '@/modules/product';
import { styles } from '@/modules/shared';
import {
  selectCurrentChange,
  selectCurrentCustomer,
  selectCurrentTotal,
  setCurrentTotal,
  useAppDispatch,
  useAppSelector,
} from '@/modules/store';
import {
  selectActualChange,
  selectActualTotal,
  selectIsActualChangeEqualToCurrentChange,
  selectIsActualTotalEqualToCurrentTotal,
  setCurrentChange,
} from '@/modules/store/utils';

export type GameReceiptProps = {
  className?: string;
};

export const GameReceipt = ({ className }: GameReceiptProps) => {
  const dispatch = useAppDispatch();

  const currentCustomer = useAppSelector(selectCurrentCustomer);
  const products = currentCustomer?.products;
  const currentTotal = useAppSelector(selectCurrentTotal);
  const actualTotal = useAppSelector(selectActualTotal);
  const isActualTotalEqualToCurrentTotal = useAppSelector(
    selectIsActualTotalEqualToCurrentTotal
  );
  const currentChange = useAppSelector(selectCurrentChange);
  const actualChange = useAppSelector(selectActualChange);
  const isActualChangeEqualToCurrentChange = useAppSelector(
    selectIsActualChangeEqualToCurrentChange
  );

  if (
    products === undefined ||
    currentCustomer === undefined ||
    actualTotal === undefined
  ) {
    return null;
  }

  const handleTotalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newTotal = value === '' ? 0 : Number(value);
    dispatch(setCurrentTotal(newTotal));
  };

  const handleChangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newChange = value === '' ? 0 : Number(value);
    dispatch(setCurrentChange(newChange));
  };

  return (
    <div className={styles('px-6 py-8 border', className)}>
      <div className="text-center">RECEIPT</div>
      <ProductList className="mt-6">
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </ProductList>
      <hr className="my-4" />
      <div className="flex justify-between gap-4 mt-1">
        <span>TOTAL</span>
        {isActualTotalEqualToCurrentTotal ? (
          <span>{formatMoney(actualTotal)}</span>
        ) : (
          <div className="max-w-[156px] flex">
            <span>$</span>
            <input
              type="number"
              className="border-b w-auto min-w-0 text-right h-6"
              value={currentTotal || ''}
              onChange={handleTotalChange}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between gap-4 mt-1">
        <span>CASH</span>
        <span>{formatMoney(currentCustomer.money)}</span>
      </div>
      <div className="flex justify-between gap-4 mt-1">
        <span>CHANGE</span>
        {isActualChangeEqualToCurrentChange && actualChange !== undefined ? (
          <span>{formatMoney(actualChange)}</span>
        ) : (
          <div className="max-w-[156px] flex">
            <span>$</span>
            <input
              type="number"
              className="border-b w-auto min-w-0 text-right h-6"
              value={currentChange || ''}
              onChange={handleChangeChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};
