import { combineReducers } from 'redux';
import dishes from './dishes';
import filter from './filter';

export default combineReducers({ dishes, filter });