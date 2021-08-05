const 
  SET_SORT_BY = 'SET_SORT_BY',
  SET_CATEGORY = 'SET_CATEGORY';

const initialState = {
  category: null,
  sortBy: 'popular',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY: {
      return {
        ...state,
        sortBy: action.payload,
      };
    }

    case SET_CATEGORY: {
      return {
        ...state,
        category: action.payload
      };
    }

    default:
      return state;
  }
};

export default filters;
