import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case "INCREMENT":
            return state + 1 ;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return initialState;
        default :
            return state
    }

}

// multiple Reducer

function ReducerCounterThree() {
   const [count,dispatch] = useReducer(reducer,initialState)
   const [countTwo,dispatchTwo] = useReducer(reducer,initialState)
  return (
    <div>
        {count}
        <button onClick={()=> dispatch("INCREMENT")}>Increment</button>
        <button onClick={()=> dispatch("DECREMENT")}>Decrement</button>
        <button onClick={()=> dispatch("RESET")}>Reset</button>
        <br/>
        {countTwo}
        <button onClick={()=> dispatchTwo("INCREMENT")}>Increment</button>
        <button onClick={()=> dispatchTwo("DECREMENT")}>Decrement</button>
        <button onClick={()=> dispatchTwo("RESET")}>Reset</button>
      
    </div>
  )
}

export default ReducerCounterThree
