import { styles } from '@/modules/shared';

export type GameLogoProps = {
  className?: string;
};

export const GameLogo = ({ className }: GameLogoProps) => (
  <div className={styles('whitespace-pre', className)}>
    {
      '    ____                       __               _ __  __       ____           __          \r\n   /  _/  _      ______  _____/ /__   _      __(_) /_/ /_     / __ \\___  ____/ /_  ___  __\r\n   / /   | | /| / / __ \\/ ___/ //_/  | | /| / / / __/ __ \\   / /_/ / _ \\/ __  / / / / |/_/\r\n _/ /    | |/ |/ / /_/ / /  / ,<     | |/ |/ / / /_/ / / /  / _, _/  __/ /_/ / /_/ />  <  \r\n/___/    |__/|__/\\____/_/  /_/|_|    |__/|__/_/\\__/_/ /_/  /_/ |_|\\___/\\__,_/\\__,_/_/|_|  \r\n                                                                                          \r\n\r\n'
    }
  </div>
);
