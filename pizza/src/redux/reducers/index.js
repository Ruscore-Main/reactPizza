import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';
import cartReducer from './cart';

const mainReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer
});

export default mainReducer;
