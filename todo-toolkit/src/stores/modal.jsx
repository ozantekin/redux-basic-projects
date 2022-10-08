import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  name: false,
  data: false,
  open: false,
}

const modal = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {
    openModal: (state, action) => {
      state.name = action.payload.name
      state.data = action.payload?.data || false
      state.open = true
    },
    closeModal: (state) => {
      state.name = false
      state.data = false
      state.open = false
    },
  },
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer
