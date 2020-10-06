import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GET_DISHES, GET_DISHES_SUCCESS, GET_DISHES_FAILURE, SEARCH_DISH } from '../helpers/actions';
import { getDishes, getDishesSuccess, getDishesFailure, fetchAllDishes, searchDish } from '../actions/index';
import DishList from '../containers/DishList';
import { APP_ID, APP_KEY } from '../helpers/credentials'; 

afterEach(cleanup);

const initState = {
  loading: false,
  hasErrors: false,
  dishes: []
};

const dishes = (state = initState, action) => {
  switch(action.type) {
    case GET_DISHES:
      return {
        ...state, 
        loading: true
      };
    case GET_DISHES_SUCCESS:
      return {
        dishes: action.payload,
        loading: false,
        hasErrors: false
      };
    case GET_DISHES_FAILURE:
      return {
        ...state,
        loading: false,
        hasErrors: true
      }
    case SEARCH_DISH:
      console.log('Log from SEARCH_DISH');
      return state;
    default:
      return state;
  }
};


function renderWithRedux(component, 
  { initialState, store = createStore(dishes, composeWithDevTools(applyMiddleware(thunk))) } = {})
  {
   return {
     ...render(<Provider store={store}>{component}</Provider>)
  }
 }

it('renders with redux', async () => {
  const { getByTestId } = renderWithRedux(<DishList />);

  expect(getByTestId('loading')).toHaveTextContent('Loading...');
});

// it('fetches and displays data', async () => {
//   const url = '/';
//   const { getByTestId } = render(<DishList url={url} />);

//   expect(getByTestId('loading')).toHaveTextContent('Loading...');
// });