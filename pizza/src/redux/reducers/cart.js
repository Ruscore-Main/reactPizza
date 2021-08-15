const ADD_PIZZA_CART = 'ADD_PIZZA_CART',
  CLEAR_CART = 'CLEAR_CART',
  REMOVE_PIZZA_CART = 'REMOVE_PIZZA_CART',
  CLEAR_PIZZA_CART = 'CLEAR_PIZZA_CART';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // Добавление пиццы в корзину
    case ADD_PIZZA_CART: {
      const newItems = {
        ...state.items,
        // здеся просто добавляются пиццы по ключу, у каждой пиццы свой ключ, а у этого ключа массив этих пицц)))
        [action.payload.id]: state.items[action.payload.id]
          ? [...state.items[action.payload.id], action.payload]
          : [action.payload],
      };
      return {
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    }

    // Удаление пиццы из корзины
    case REMOVE_PIZZA_CART: {
      const pizza = action.payload;
      const index = state.items[pizza.id].findIndex(
        (el) => el.name === pizza.name && el.type === pizza.type && el.size === pizza.size,
      );

      // если такая пицца существует
      if (~index) {
        
        state.items[pizza.id].splice(index, 1);
        const newItems = {
          ...state.items,
          // здеся просто добавляются пиццы по ключу, у каждой пиццы свой ключ, а у этого ключа массив этих пицц)))
          [pizza.id]: [...state.items[pizza.id]],
        };

        if (newItems[pizza.id].length === 0) {
          delete newItems[pizza.id];
        }

        return {
          ...state,
          items: newItems,
          totalCount: state.totalCount - 1,
          totalPrice: state.totalPrice - pizza.price,
        };
      }

      return {
        ...state,
        items: {
          ...state.items,
        },
      };
    }

    // Удаление категории пицц из корзины
    case CLEAR_PIZZA_CART: {
      const pizza = action.payload;
      // выделяем только оставшиеся пиццы
      const newPizzas = state.items[pizza.id].filter(el => el.type !== pizza.type || el.size !== pizza.size);
      // изменение цены полсе удаления пицц
      const totalMinus = state.items[pizza.id].length - newPizzas.length
      const newItems = {
        ...state.items,
        // здеся просто добавляются пиццы по ключу, у каждой пиццы свой ключ, а у этого ключа массив этих пицц)))
        [pizza.id]: newPizzas,
      };

      // если пицц больше нету по ключу, то удаляем ключ
      if (newItems[pizza.id].length === 0) {
        delete newItems[pizza.id];
      }
      return {
        items: newItems,
        totalCount: state.totalCount - totalMinus,
        totalPrice: state.totalPrice - pizza.price*totalMinus,
      };
    }

    // Очистка корзины
    case CLEAR_CART: {
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }

    default:
      return state;
  }
};

export default cart;
