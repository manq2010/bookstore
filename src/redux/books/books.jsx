import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

// AAction Types

const LOAD = 'bookstore/books/LoadBooks';
const ADD = 'bookstore/books/AddBook';
const REMOVE = 'bookstore/books/RemoveBook';
const EDIT = 'my-app/bookstore/EditBook';

// Define an initial state value for the app

const initialState = {
  books: [],
};
// Reducer

const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case `${LOAD}/fulfilled`:
      return {
        ...state,
        books: [payload],
      };
    case `${ADD}/fulfilled `:
      return {
        ...state,
        books: [...state.books, payload],
      };
    case `${REMOVE}/fulfilled`:
      return {
        books: [...state.books.filter((item) => item.id !== payload)],
      };

    case EDIT:
      return {
        books: [...state.books, payload],
      };
    default:
      return state;
  }
};

// Action Creators

export const LoadBooks = createAsyncThunk(
  LOAD,
  async () => {
    const response = await axios.get('/books');
    const books = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return books;
  },
);

export const AddBook = createAsyncThunk(
  ADD,
  async (book) => {
    const response = await axios.post('/books',
      {
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      });
    return response.data;
  },
);

export const RemoveBook = createAsyncThunk(
  REMOVE,
  async (id) => {
    await axios.delete(`/books/${id}`,
      {
        item_id: id,
      });
    return { id };
  },
);

export default bookReducer;
