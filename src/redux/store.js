import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import cart from './reducers/cart';
import favorites from './reducers/favorites';
import orders from './reducers/orders';
import search from './reducers/search';
import home from './reducers/home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  cart,
  favorites,
  orders,
  search,
  home,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;