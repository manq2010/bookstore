// Actions

const LOAD = 'my-app/categories/LOAD';
const STATUS = 'my-app/categories/STATUS';

// Define an initial state value for the app

const initialState = [
  {
    status: 'Under construction',
  },
];

// Reducer

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return [
        ...state, action.payload,
      ];
    case STATUS:
      return [
        ...state, action.payload,
      ];
    default:
      return state;
  }
};

// Action Creators

export const LoadCategories = () => ({ type: LOAD });

export const ShowStatus = () => ({ type: STATUS });

export default categoriesReducer;
