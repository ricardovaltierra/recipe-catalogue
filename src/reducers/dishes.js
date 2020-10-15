import {
  GET_DISHES, GET_DISHES_SUCCESS, GET_DISHES_FAILURE, SEARCH_DISH,
} from '../helpers/actions';

export const initialState = {
  loading: false,
  hasErrors: false,
  dishes: [],
};

const dishes = (state = initialState, action) => {
  switch (action.type) {
    case GET_DISHES:
      return {
        ...state,
        loading: true,
      };
    case GET_DISHES_SUCCESS:
      return {
        dishes: action.payload,
        loading: false,
        hasErrors: false,
      };
    case GET_DISHES_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true,
      };
    case SEARCH_DISH:
      return state;
    default:
      return state;
  }
};

export default dishes;
