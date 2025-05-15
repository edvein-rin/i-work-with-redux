import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { State } from './state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
