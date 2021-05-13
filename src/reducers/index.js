import {combineReducers} from "redux" 

import car from './cars'
import filter from './sort'
 
export default combineReducers({
  car,
  filter
})