import { styles } from '@/modules/shared';

export type ProductListItemProps = {
  name: string;
  price: number;
  className?: string;
};

export const ProductListItem = ({
  name,
  price,
  className,
}: ProductListItemProps) => (
  <li className={styles('flex justify-between gap-4', className)}>
    <span>{name}</span>
    <span>${price}</span>
  </li>
);
