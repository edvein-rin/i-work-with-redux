import { styles } from '@/modules/shared';

export type CustomerCardProps = {
  name: string;
  asciiImage: string;
  quote: string;
  className?: string;
};

export const CustomerCard = ({
  name,
  asciiImage,
  quote,
  className,
}: CustomerCardProps) => (
  <div className={styles('flex flex-col gap-8', className)}>
    <div className="text-center whitespace-pre">{asciiImage}</div>
    <div className="flex flex-col gap-4">
      <span className="text-center uppercase">{name}</span>
      <span className="text-center">{quote}</span>
    </div>
  </div>
);
