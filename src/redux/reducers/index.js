import { combineReducers } from 'redux';

import cart from './cart';
import favorites from './favorites';
import orders from './orders';
import home from './home';

export default combineReducers({
  cart,
  favorites,
  orders,
  home,
});
