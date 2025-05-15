import { Provider } from 'react-redux';

import { createStore } from '../../utils';

const store = createStore();

export type StoreProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <Provider store={store}>{children}</Provider>
);
