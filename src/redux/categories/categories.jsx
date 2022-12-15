// Action Types

const LOAD = 'my-app/categories/LoadCategories';
const STATUS = 'my-app/categories/CheckStatus';

// Define an initial state value for the app

const initialState = [
  {
    categories: [],
    status: '',
  },
];

// Reducer

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        categories: [...state, action.payload],
        status: action.payload,
      };
    case STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

// Action Creators

export const LoadCategories = () => ({ type: LOAD, payload: 'Under construction' });

export const CheckStatus = () => ({ type: LOAD, payload: 'Under construction' });

export default categoriesReducer;
