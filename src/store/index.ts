import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

/**
 * configureStore
 * @param {*} initialState
 */
export default function configureStore(initialState = {}): Store {
  // const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // const enhancers = composeFn(applyMiddleware(thunk));
  // const enhancers = applyMiddleware(thunk);
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
  // return createStore(rootReducer);
}
