import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import thunkMiddleware from 'redux-thunk'
// npm install redux-thunk

import { bookReducer } from './Books/BooksRedux';

const rootReducer = combineReducers({
  book: bookReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
