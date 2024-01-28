import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  orders: []
}

export const leftSideBar = createSlice({
  name: 'leftSideBar',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload
    }
  }
})

export const { setOrders, setOpen } = leftSideBar.actions

export default leftSideBar.reducer
