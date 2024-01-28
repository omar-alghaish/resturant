import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  table: null,
  isOpen: false
}

export const table = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTable: (state, action) => {
      state.table = action.payload
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload
    }
  }
})

export const { setTable, setOpen } = table.actions

export default table.reducer
