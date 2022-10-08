import './todo-item.styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { modalHandle } from '../../utils'
import { deleteTodo } from '../../stores/todo'

export default function TodoItem({ todo }) {
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id))
  }

  const editHandle = () => {
    modalHandle('edit-todo-item-modal', todo)

    /*  dispatch(
      openModal({
        name: 'edit-todo-item-modal',
        data: todo,
      })
    ) */
  }

  return (
    <div
      style={{ textDecoration: todo.completed ? 'line-through' : '' }}
      className='todo-item'
    >
      {todo.title} | {todo.account}
      {todo.account === user.account && (
        <div className='todo-item-btns'>
          <button onClick={editHandle}>Edit</button>
          <button onClick={deleteHandle}>Remove</button>
        </div>
      )}
    </div>
  )
}
