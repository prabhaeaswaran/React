import { configureStore, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
export const store:any=configureStore({
  reducer:{counter:counterReducer,},
})