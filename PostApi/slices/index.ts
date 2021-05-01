import { combineReducers } from 'redux'
import recipesReducer from './apiSlice'
const rootReducer = combineReducers({
  reducer: recipesReducer,
})

export default rootReducer
