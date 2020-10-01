import { DETAIL_DISH, GET_DISHES, GET_DISHES_SUCCESS, GET_DISHES_FAILURE } from '../helpers/actions';
import { APP_ID, APP_KEY } from '../helpers/credentials'; 

// const searchDish = name => ({
//   type: SEARCH_DISH,
//   name
// });

const detailDish = dish => ({
  type: DETAIL_DISH,
  dish
});

const getDishes = () => ({ type: GET_DISHES });
const getDishesSuccess = dishes => ({ 
  type: GET_DISHES_SUCCESS,
  payload: dishes
});
const getDishesFailure = () => ({ type: GET_DISHES_FAILURE });

const fetchAllDishes = (dishToSearch = 'random') => {
  return async (dispatch) => {
    dispatch(getDishes());
    try {
      const response = await fetch(
        `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${dishToSearch}`
      );
      const Data = await response.json();
      console.log(Data.hits);
      dispatch(getDishesSuccess(Data.hits));
    } catch (error) {
      dispatch(getDishesFailure());
    }
  }
};

export { getDishes, getDishesSuccess, getDishesFailure, fetchAllDishes, detailDish };