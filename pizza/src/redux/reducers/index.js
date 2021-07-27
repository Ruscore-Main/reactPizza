import { combineReducers } from 'redux';

import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const mainReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default mainReducer;
