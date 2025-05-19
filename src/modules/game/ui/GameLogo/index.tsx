import { styles } from '@/modules/shared';
import { selectIsGameWon, useAppSelector } from '@/modules/store';

export type GameLogoProps = {
  className?: string;
};

export const GameLogo = ({ className }: GameLogoProps) => {
  const isGameWon = useAppSelector(selectIsGameWon);

  return (
    <div className={styles('whitespace-pre', className)}>
      {isGameWon
        ? '   ______                __       __      __       __   __   __\r\n  / ____/___  ____  ____/ /      / /___  / /_     / /  / /  / /\r\n / / __/ __ \\/ __ \\/ __  /  __  / / __ \\/ __ \\   / /  / /  / / \r\n/ /_/ / /_/ / /_/ / /_/ /  / /_/ / /_/ / /_/ /  /_/  /_/  /_/  \r\n\\____/\\____/\\____/\\__,_/   \\____/\\____/_.___/  (_)  (_)  (_)   '
        : '    ____                       __               _ __  __       ____           __          \r\n   /  _/  _      ______  _____/ /__   _      __(_) /_/ /_     / __ \\___  ____/ /_  ___  __\r\n   / /   | | /| / / __ \\/ ___/ //_/  | | /| / / / __/ __ \\   / /_/ / _ \\/ __  / / / / |/_/\r\n _/ /    | |/ |/ / /_/ / /  / ,<     | |/ |/ / / /_/ / / /  / _, _/  __/ /_/ / /_/ />  <  \r\n/___/    |__/|__/\\____/_/  /_/|_|    |__/|__/_/\\__/_/ /_/  /_/ |_|\\___/\\__,_/\\__,_/_/|_|  '}
    </div>
  );
};
