import { combineReducers } from 'redux';
import { globalReducer } from './globalReducer';
import { IRootReducer } from '../types';

export const rootReducer = combineReducers<IRootReducer>({
  globalReducer,
});
