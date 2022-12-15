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

// const [pending, fulfilled, rejected] = createAsyncThunkStates;

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
    console.log(books);
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
    console.log(response.data);
    return response.data;
  },
);

export const RemoveBook = createAsyncThunk(
  REMOVE,
  async (id) => {
    console.log(id);
    const response = await axios.delete(`/books/${id}`,
      {
        item_id: id,
      });
    console.log(response.data);
    return { id };
  },
);

export default bookReducer;
