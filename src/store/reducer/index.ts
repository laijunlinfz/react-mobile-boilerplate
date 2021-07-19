import { combineReducers, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import homeReducer from './home';

const rootReducer = combineReducers({ homeReducer });

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default rootReducer;
