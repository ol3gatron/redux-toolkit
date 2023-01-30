import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, increaseByAmount } from "./counterSlice"

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Counter is: {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increaseByAmount(2))}>+2</button>
        <button onClick={() => dispatch(increaseByAmount(3))}>+3</button>
      </div>
    </div>
  )
}

export default Counter