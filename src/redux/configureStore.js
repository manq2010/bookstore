import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { bookReducer } from './books/books';
import { categoriesReducer } from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
