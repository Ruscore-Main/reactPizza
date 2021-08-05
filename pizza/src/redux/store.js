import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import mainReducer from "./reducers";

// Для того, чтобы юзать несколько middlware, в навшем случае это санки и расширение для демонстрации действий
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// после написания composeEnhancers мы не пишем window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
window.store = store;

export default store;
