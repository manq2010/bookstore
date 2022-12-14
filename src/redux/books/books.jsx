import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

// AAction Types

const LOAD = 'bookstore/books/LoadBooks';
const ADD = 'bookstore/books/AddBook';
const REMOVE = 'bookstore/books/RemoveBook';
const EDIT = 'my-app/bookstore/EditBook';

// Define an initial state value for the app

const initialState = {
  // books: [
  //   {
  //     id: 1,
  //     author: 'author 1',
  //     title: 'Book Description 1',
  //     category: 'Sci-Fi',
  //   },
  //   {
  //     id: 2,
  //     author: 'author 2',
  //     title: 'Book Description 2',
  //     category: 'Economy',
  //   },
  //   {
  //     id: 3,
  //     author: 'author 3',
  //     title: 'Book Description 3',
  //     category: 'Sports',
  //   },
  // ],
  books: [],
};
// Reducer

const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD:
      return {
        ...state,
        books: [...state.books, payload],
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
  'bookstore/books/LoadBooks',
  async () => {
    const response = await axios.get('/books');
    return response.data.data;
  },
);

export const AddBook = createAsyncThunk(
  'bookstore/books/AddBook',
  async (book) => {
    const response = await axios.post('/books', book);
    return response.data.data;
  },
);

// (book) => ({ type: ADD, payload: book });

export const RemoveBook = createAsyncThunk(
  'bookstore/books/RemoveBook',
  async ({ id }) => {
    await axios.delete(`/books/${id}`);
    return { id };
  },
);

// (id) => ({ type: REMOVE, payload: id });

export const EditBook = (id) => ({ type: EDIT, payload: id });

export default bookReducer;
