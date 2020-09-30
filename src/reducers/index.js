import { combineReducers } from 'redux';
import dishes from './dishes';

const rootReducer = combineReducers({ dishes: dishes });

export default rootReducer;