import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import { State } from './state';

type AppAction = Action;
type AppDispatch = ThunkDispatch<State, unknown, AppAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
