import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, increaseByAmount } from "./counterSlice"

const Counter = () => {
  const [amount, setAmount] = useState(0)

  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  const addNumber = Number(amount) || 0

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(increaseByAmount(addNumber))
  }

  const handleReset = () => {
    setAmount(0)

    dispatch(reset())
  }

  return (
    <div className="counter">
      <p className="counter--number">{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => dispatch(increaseByAmount(2))}>+2</button>
        <button onClick={() => dispatch(increaseByAmount(3))}>+3</button>
      </div>
      <div className="input">
        <form onSubmit={handleSubmit}>
          <input type="text" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          <button>Add</button>
        </form>
      </div>
    </div>
  )
}

export default Counter