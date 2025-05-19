import { Product, ProductList, ProductListItem } from '@/modules/product';
import { formatMoney, styles } from '@/modules/shared';

export type ReceiptCardProps = {
  products: Product[];
  cash: number;
  change: number;
  className?: string;
};

export const ReceiptCard = ({
  products,
  cash,
  change,
  className,
}: ReceiptCardProps) => {
  const totalMoney = products.reduce((acc, product) => acc + product.price, 0);

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
        <span>{formatMoney(totalMoney)}</span>
      </div>
      <div className="flex justify-between gap-4 mt-1">
        <span>CASH</span>
        <span>{formatMoney(cash)}</span>
      </div>
      <div className="flex justify-between gap-4 mt-1">
        <span>CHANGE</span>
        <span>{formatMoney(change)}</span>
      </div>
    </div>
  );
};
