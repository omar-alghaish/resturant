import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../cartReducer'
import table from '../features/tables'
import leftSideBar from '../features/leftSideBar'
export const rootReducer = combineReducers({
  tables: table,
  cart: cartReducer,
  leftSideBar: leftSideBar
})
