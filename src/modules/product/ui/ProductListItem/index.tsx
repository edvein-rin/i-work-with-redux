import { formatMoney, Money } from '@/modules/money';
import { styles } from '@/modules/shared';

export type ProductListItemProps = {
  name: string;
  price: Money;
  className?: string;
};

export const ProductListItem = ({
  name,
  price,
  className,
}: ProductListItemProps) => (
  <li className={styles('flex justify-between gap-8', className)}>
    <span>{name}</span>
    <span>{formatMoney(price)}</span>
  </li>
);
