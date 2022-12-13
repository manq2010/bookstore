// Actions

const LOAD = 'bookstore/books/LoadBooks';
const ADD = 'bookstore/books/AddBook';
const REMOVE = 'bookstore/books/RemoveBook';
const EDIT = 'my-app/bookstore/EditBook';

// Define an initial state value for the app

const initialState = {
  books: [
    {
      id: 1,
      title: 'Book 1',
      description: 'Book Description 1',
    },
    {
      id: 2,
      title: 'Book 2',
      description: 'Book Description 2',
    },
    {
      id: 3,
      title: 'Book 3',
      description: 'Book Description 3',
    },
  ],
};
// Reducer

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case ADD:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE:
      return {
        books: [...state.filter((item) => item.id !== action.payload)],
      };

    case EDIT:
      return {
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

// Action Creators

export const LoadBooks = (book) => ({ type: LOAD, payload: book });

export const AddBook = () => ({ type: ADD });

export const RemoveBook = (id) => ({ type: REMOVE, payload: id });

export const EditBook = (id) => ({ type: EDIT, payload: id });

export default bookReducer;
