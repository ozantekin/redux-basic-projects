import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  user: false,
}

const auth = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = false
    },
  },
})

export const { login, logout } = auth.actions
export default auth.reducer
