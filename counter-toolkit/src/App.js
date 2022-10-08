import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from './store/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(reset())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(3))
  }

  return (
    <div className='App'>
      <h1> Counter App</h1>
      <button onClick={handleReset}> Reset </button>
      <div className='counter-inner'>
        <button onClick={handleDecrement}> - </button>
        <p> {count} </p>
        <button onClick={handleIncrement}> + </button>
      </div>
      <button onClick={handleIncrementByAmount}> +3 </button>
    </div>
  )
}

export default App
