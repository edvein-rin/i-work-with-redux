export { StoreProvider } from './ui';
export type { StoreProviderProps } from './ui';
export {
  useAppDispatch,
  useAppSelector,
  selectActualChange,
  selectCurrentCustomer,
  selectCurrentChange,
  selectActualTotal,
  selectCurrentTotal,
  selectProducts,
  selectIsActualChangeEqualToCurrentChange,
  selectIsActualTotalEqualToCurrentTotal,
  selectIsGameStarted,
  selectIsGameWon,
  loadProducts,
  startGame,
  setProducts,
  setCurrentTotal,
} from './utils';
