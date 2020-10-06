import { GET_DISHES, GET_DISHES_SUCCESS, GET_DISHES_FAILURE, SEARCH_DISH } from '../helpers/actions';
import { getDishes, getDishesSuccess, getDishesFailure, fetchAllDishes, searchDish } from '../actions/index';

describe('actions', () => {
  it('should create an acction to search a dish', () => {
    const dishToSearch = 'Pizza';
    const expectedAction = {
      type: SEARCH_DISH,
      dishToSearch: dishToSearch
    };

    expect(searchDish(dishToSearch)).toEqual(expectedAction);
  });

  // it('should create an acction to get on success a dishlist', () => {
  //   const dishes = 
  //   const expectedAction = {
  //     type: SEARCH_DISH,
  //     dishToSearch: dishToSearch
  //   };

  //   expect(searchDish(dishToSearch)).toEqual(expectedAction);
  // });
});