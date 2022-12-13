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
      author: 'author 1',
      title: 'Book Description 1',
      category: 'Sci-Fi',
    },
    {
      id: 2,
      author: 'author 2',
      title: 'Book Description 2',
      category: 'Economy',
    },
    {
      id: 3,
      author: 'author 3',
      title: 'Book Description 3',
      category: 'Sports',
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
        books: [...state.books.filter((item) => item.id !== action.payload)],
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

export const AddBook = (book) => ({ type: ADD, payload: book });

export const RemoveBook = (id) => ({ type: REMOVE, payload: id });

export const EditBook = (id) => ({ type: EDIT, payload: id });

export default bookReducer;
