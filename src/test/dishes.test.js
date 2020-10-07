import dishes from '../reducers/dishes';
import dishesSample from './sampleSearch.json';
import { GET_DISHES, GET_DISHES_SUCCESS, GET_DISHES_FAILURE } from '../helpers/actions';

const startState = {
  loading: false,
  hasErrors: false,
  dishes: [],
};

describe('dishes reducer', () => {
  it('should return initial state', () => {
    expect(dishes(undefined, {})).toEqual({
      loading: false,
      hasErrors: false,
      dishes: [],
    });
  });

  it('should handle GET_DISHES', () => {
    expect(
      dishes(startState, {
        type: GET_DISHES,
      }),
    ).toEqual({
      loading: true,
      hasErrors: false,
      dishes: [],
    });
  });

  it('should handle GET_DISHES_SUCCESS', () => {
    expect(
      dishes(startState, {
        type: GET_DISHES_SUCCESS,
        payload: dishesSample,
      }),
    ).toEqual({
      loading: false,
      hasErrors: false,
      dishes: dishesSample,
    });
  });

  it('should handle GET_DISHES_FAILURE', () => {
    expect(
      dishes(startState, {
        type: GET_DISHES_FAILURE,
        payload: dishesSample,
      }),
    ).toEqual({
      loading: false,
      hasErrors: true,
      dishes: [],
    });
  });
});
