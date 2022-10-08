import { nanoid } from 'nanoid'
import { useState } from 'react'

import { useSelector } from 'react-redux'
import { addTodoHandle } from '../../utils'

import './add-todo.styles.css'

export default function AddTodo() {
  const [todo, setTodo] = useState('')

  const user = useSelector((state) => state.auth.user)

  const submitHandle = (e) => {
    e.preventDefault()

    addTodoHandle({
      title: todo,
      completed: false,
      id: nanoid(),
      account: user.account,
    })

    /* dispatch(
      addTodo({
        title: todo,
        completed: false,
        id: nanoid(),
        account: user.account,
      })
    ) */
    setTodo('')
  }
  return (
    <div className='add-todo'>
      <form onSubmit={submitHandle}>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter a todo'
        />
        <button disabled={!todo || !user} type='submit'>
          Add
        </button>
      </form>
    </div>
  )
}
