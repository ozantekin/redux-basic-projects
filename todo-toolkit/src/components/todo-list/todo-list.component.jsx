import TodoItem from '../todo-item/todo-item.component'

import { useSelector } from 'react-redux'
import { Fragment } from 'react'

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos)
  // const {todos} = useSelector(state => state.todo)
  const user = useSelector((state) => state.auth.user)

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} user={user} />
        </li>
      ))}
    </ul>
  )
}
