import type { Money } from './money';

export const formatMoney = (
  money: Money,
  options?: Intl.NumberFormatOptions
): string => {
  const formattedValue = money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    ...options,
  });

  return formattedValue;
};
