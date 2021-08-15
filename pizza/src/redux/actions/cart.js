export const addPizzaToCart = pizza => ({type: 'ADD_PIZZA_CART', payload: pizza});

export const removePizzaFromCart = pizza => ({type: 'REMOVE_PIZZA_CART', payload: pizza});

export const clearPizzasFromCart = pizza => ({type: 'CLEAR_PIZZA_CART', payload: pizza})

export const clearCart = () => ({type: 'CLEAR_CART'})