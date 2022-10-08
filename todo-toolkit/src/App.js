import { useSelector } from 'react-redux'
import './utils'

import AddTodo from './components/add-todo/add-todo.component'
import Navbar from './components/navbar/navbar.component'
import TodoList from './components/todo-list/todo-list.component'
import Modal from './components/modal/modal.component'

function App() {
  const { open: isModalOpen } = useSelector((state) => state.modal)
  //const open = useSelector((state) => state.modal.open)

  return (
    <div className='App'>
      {isModalOpen && <Modal />}
      <Navbar />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
