import { useState } from 'react'
import { editTodo } from '../stores/todo'
import { useDispatch } from 'react-redux'

export default function EditTodoItemModal({ data, close }) {
  const [todo, setTodo] = useState(data.title)

  const dispatch = useDispatch()

  const submitHandle = (e) => {
    e.preventDefault()
    dispatch(
      editTodo({
        id: data.id,
        title: todo,
      })
    )
    close()
  }

  return (
    <div>
      <button className='close-button' onClick={close}>
        X
      </button>
      <form onSubmit={submitHandle}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type='submit'> Amended</button>
      </form>
    </div>
  )
}
