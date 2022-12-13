import { v4 as uuidv4 } from 'uuid';

// Actions

const LOAD = 'my-app/bookstore/LOAD';
const ADD = 'my-app/bookstore/ADD';
const REMOVE = 'my-app/bookstore/REMOVE';
const EDIT = 'my-app/bookstore/EDIT';

// Define an initial state value for the app

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    comment: 'This is a comment',
    catergory: 'Economy  ',
  },
  {
    id: uuidv4(),
    title: 'Dunes',
    author: 'Frank Herbert',
    comment: 'This is a comment',
    catergory: 'Science Friction',
  },
  {
    id: uuidv4(),
    title: 'The Capital in the twenty-First Century',
    author: 'Suzanne Collins',
    comment: 'This is a comment',
    catergory: 'Science Friction',
  },
];

// Reducer

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return [
        ...state, action.payload,
      ];
    case ADD:
      return [
        ...state, action.payload,
      ];
    case REMOVE:
      return {
        ...state.filter((item) => item.id !== action.payload),
      };

    case EDIT:
      return {

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
