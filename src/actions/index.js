import {
  GET_DISHES, GET_DISHES_SUCCESS, GET_DISHES_FAILURE, SEARCH_DISH,
} from '../helpers/actions';
import { APP_ID, APP_KEY } from '../helpers/credentials';

const searchDish = dishToSearch => ({
  type: SEARCH_DISH,
  dishToSearch,
});

const getDishes = () => ({ type: GET_DISHES });
const getDishesSuccess = dishes => ({
  type: GET_DISHES_SUCCESS,
  payload: dishes,
});
const getDishesFailure = () => ({ type: GET_DISHES_FAILURE });

function fetchAllDishes(dishToSearch = 'random') {
  return dispatch => {
    dispatch(getDishes());
    return fetch(
      `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${dishToSearch}`,
    ).then(res => res.json())
      .then(body => dispatch(getDishesSuccess(body.hits)))
      .catch(() => dispatch(getDishesFailure()));
  };
}

export {
  getDishes, getDishesSuccess, getDishesFailure, fetchAllDishes, searchDish,
};
