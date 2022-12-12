// Actions

const LOAD = 'my-app/bookstore/LOAD';
const ADD = 'my-app/bookstore/ADD';
const REMOVE = 'my-app/bookstore/REMOVE';
const EDIT = 'my-app/bookstore/EDIT';

// Define an initial state value for the app

const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    comment: 'This is a comment',
    catergory: 'Economy  ',
  },
  {
    id: 2,
    title: 'Dunes',
    author: 'Frank Herbert',
    comment: 'This is a comment',
    catergory: 'Science Friction',
  },
  {
    id: 3,
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
      return {
        [state.id]: action.payload,
      };
    case ADD:
      return {

      };
    case REMOVE:
      return {

      };

    case EDIT:
      return {

      };
    default:
      return state;
  }
};

// Action Creators

export const AddBook = () => ({
  type: ADD,
//     payload: {
//       id: 1,
//       title: 'Book title',
//       author: 'Suzanne Collins',
//       comment: 'This is a comment',
});

export const RemoveBook = () => ({ type: REMOVE });

export const EditBook = () => ({ type: EDIT });

export default bookReducer;
