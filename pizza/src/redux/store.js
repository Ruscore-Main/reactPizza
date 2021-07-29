import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers';

const store = createStore(mainReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

window.store = store;

export default store;
