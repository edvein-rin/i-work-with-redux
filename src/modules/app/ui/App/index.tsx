import { StoreProvider } from '@/modules/store';
import { Game } from '@/modules/game';

export const App = () => (
  <StoreProvider>
    <Game />
  </StoreProvider>
);
