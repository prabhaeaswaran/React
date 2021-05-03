import { combineReducers } from 'redux'
import recipesReducer from './fruits'
const rootReducer = combineReducers({
  reducer: recipesReducer,
})

export default rootReducer