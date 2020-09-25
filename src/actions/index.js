export { CHANGE_FILTER, SEARCH_DISH, GET_DISH } from '../helpers/actions';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter
});

const searchDish = name => ({
  type: SEARCH_DISH,
  name
});

const detailDish = id => ({
  type: GET_DISH,
  id
});

export { changeFilter, searchDish, detailDish };