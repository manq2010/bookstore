import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

// AAction Types

const LOAD = 'bookstore/books/LoadBooks';
const ADD = 'bookstore/books/AddBook';
const REMOVE = 'bookstore/books/RemoveBook';

// Define an initial state value for the app

const initialState = {
  books: [],
};

// Reducer

const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD:
      return {
        ...state,
        books: [payload],
      };
    case ADD:
      return {
        ...state,
        books: [...state.books, payload],
      };
    case REMOVE:
      return {
        books: [...state.books.filter((item) => item.id !== payload)],
      };
    default:
      return state;
  }
};

// Action Creators

export const LoadBooks = createAsyncThunk(
  LOAD,
  async (_, { dispatch }) => {
    const response = await axios.get('/books');
    const books = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    dispatch(({ type: LOAD, payload: books }));
  },
);

export const AddBook = createAsyncThunk(
  ADD,
  async (book, { dispatch }) => {
    await axios.post('/books',
      {
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      });
    dispatch({ type: ADD, payload: book });
  },
);

export const RemoveBook = createAsyncThunk(
  REMOVE,
  async (id, { dispatch }) => {
    await axios.delete(`/books/${id}`,
      {
        item_id: id,
      });
    dispatch({ type: REMOVE, payload: id });
  },
);

export default bookReducer;
