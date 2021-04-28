import { combineReducers } from 'redux'

import recipesReducer from './ApiSlice'

const rootReducer = combineReducers({
  reducer: recipesReducer,
})

export default rootReducer
