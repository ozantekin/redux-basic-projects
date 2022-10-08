import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  todos: [],
}

const todos = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos]
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          todo.title = action.payload.title
        }
        return todo
      })
    },
  },
})

export const { addTodo, deleteTodo, editTodo } = todos.actions
export default todos.reducer
