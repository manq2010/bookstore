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

export const Books = (books) => ({ type: LOAD, payload: books });

export const LoadBooks = () => async (dispatch) => {
  try {
    const response = await axios.get('/books');
    const books = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key][0],
    }));
    console.log(books);
    dispatch(Books(books));
    return Promise.resolve(books);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const AddBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post('/books',
      {
        item_id: book.id,
        title: book.title,
        author: book.author,
        category: book.category,
      });
    console.log(response);
    dispatch({ type: ADD, payload: book });
    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const RemoveBook = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/books/${id}`);
    dispatch({ type: REMOVE, payload: id });
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

// (id) => ({ type: REMOVE, payload: id });

export default bookReducer;
