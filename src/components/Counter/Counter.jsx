import React from 'react'
import counterSlice from '../Redux/CounterSlice'
import {useSelector,useDispatch} from 'react-redux'




function Counter() {
  const actions=counterSlice.actions

  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.count)

 

  const increment=()=>{
    dispatch(actions.increment())
  }

  const decrement=()=>{
    dispatch(actions.decrement())
  }

  return (
    <div className="counter-container">
            <button className="counter-btn" onClick={count>0?decrement:null}>-</button>
            <p>{count}</p>
            <button className="counter-btn" onClick={increment}>+</button>
    </div>
  )
}

export default Counter