import { combineReducers } from 'redux'
import recipesReducer from './slices'
const rootReducer = combineReducers({
  reducer: recipesReducer,
})

export default rootReducer