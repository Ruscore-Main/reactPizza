import { pizzasAPI } from '../../api/api';

export const setPizzas = (items) => ({ type: 'SET_PIZZAS', payload: items });

export const setLoaded = (payload) => ({ type: 'SET_LOADED', payload });

// side of thunks
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  if (category === null && sortBy === 'popular') {
    pizzasAPI.getAllPizzas().then((pizzas) => dispatch(setPizzas(pizzas)));
  } else {
    pizzasAPI.getPizzasByParams(sortBy, category).then((pizzas) => dispatch(setPizzas(pizzas)));
  }
};
