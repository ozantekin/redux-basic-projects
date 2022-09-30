import { connect } from 'react-redux'
import { addTodo, toggleTodo, clearTodo } from './redux/actions/index.actions'
import './App.css'
import { useState } from 'react'

function App(props) {
  const [todo, setTodo] = useState('')
  return (
    <div className='App'>
      <div className='adding-input'>
        <h1> Not Panosu</h1>
        <div>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholer='Panoya pinle'
          />
          <button
            onClick={() => {
              setTodo('')
              props.addTodo(todo)
            }}
          >
            Raptiye
          </button>
        </div>
      </div>
      <ul className='notes-container'>
        {props.notes.map((note) => (
          <li
            onClick={() => props.toggleTodo(note.id)}
            key={note.id}
            className={note.completed ? 'completed' : ''}
          >
            {note.todo}
          </li>
        ))}
        <button onClick={() => props.clearTodo()} className='clear'>
          Tamamlanan Raptiyeleri Sök
        </button>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { addTodo, toggleTodo, clearTodo })(App)
