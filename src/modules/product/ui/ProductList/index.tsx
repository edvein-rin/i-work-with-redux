import { ReactNode } from 'react';

import { styles } from '@/modules/shared';

export type ProductListProps = {
  className?: string;
  children?: ReactNode;
};

export const ProductList = ({ className, children }: ProductListProps) => (
  <ul className={styles('flex flex-col gap-2', className)}>
    {children}
  </ul>
);
