import { combineReducers, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import home from './home';

const rootReducer = combineReducers({ home });

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default rootReducer;
