import { GET_DISHES, GET_DISHES_SUCCESS, GET_DISHES_FAILURE, SEARCH_DISH } from '../helpers/actions';
import { APP_ID, APP_KEY } from '../helpers/credentials'; 

const searchDish = dishToSearch => ({
  type: SEARCH_DISH,
  dishToSearch: dishToSearch
});

const getDishes = () => ({ type: GET_DISHES });
const getDishesSuccess = dishes => ({ 
  type: GET_DISHES_SUCCESS,
  payload: dishes
});
const getDishesFailure = () => ({ type: GET_DISHES_FAILURE });

const fetchAllDishes = (dishToSearch = 'random') => {
  console.log(`lof grom fetchAllDishes receive -> ${dishToSearch}`);
  return async (dispatch) => {
    dispatch(getDishes());
    try {
      const response = await fetch(
        `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${dishToSearch}`
      );
      const Data = await response.json();
      dispatch(getDishesSuccess(Data.hits));
    } catch (error) {
      dispatch(getDishesFailure());
    }
  }
};

export { getDishes, getDishesSuccess, getDishesFailure, fetchAllDishes, searchDish };