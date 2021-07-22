import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
// import thunk from '../utils/lib/thunk';
// import { logger } from '@/utils/lib/logger';
import rootReducer from './reducer';

/**
 * configureStore
 * @param {*} initialState
 */
export default function configureStore(initialState = {}): Store {
  const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const enhancers = composeFn(applyMiddleware(thunk));
  // const enhancers = applyMiddleware(thunk);
  // return createStore(rootReducer, initialState, enhancers);
  return createStore(rootReducer, initialState, composeFn(applyMiddleware(thunk)));
}
