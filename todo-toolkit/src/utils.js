import store from './stores/store'
import { addTodo, deleteTodo } from './stores/todo'
import { login, logout } from './stores/auth'
import { openModal } from './stores/modal'

/* 
bütün state'leri getirir
console.log(store.getState())
*/

export const addTodoHandle = (todo) => {
  store.dispatch(addTodo(todo))
}

export const loginHandle = (user) => {
  store.dispatch(login(user))
}

export const logoutHandle = (user) => {
  store.dispatch(logout(user))
}

export const modalHandle = (name, data = false) => {
  store.dispatch(openModal({ name, data }))
}

export const deleteHandle = () => {
  store.dispatch(deleteTodo())
}
