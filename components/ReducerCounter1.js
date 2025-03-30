import React, { useReducer } from 'react'

const initialState = {
    firstCount : 0,
    secondCount:10
}
const reducer = (state,action) => {
    switch(action.type){
        case "INCREMENT":
            return {...state,firstCount : state.firstCount + action.value} ;
        case "DECREMENT":
            return {...state,firstCount : state.firstCount - action.value};
        case "INCREMENT1":
            return {...state, secondCount : state.secondCount + action.value} ;
        case "DECREMENT1":
            return {...state, secondCount : state.secondCount - action.value};
        case "RESET":
            return initialState;
        default :
            return state
    }

}


function ReducerCounter1() {
   const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>{count.firstCount}</div>
        <button onClick={()=> dispatch({type:"INCREMENT",value:1})}>Increment</button>
        <button onClick={()=> dispatch({type:"DECREMENT",value:1})}>Decrement</button>
        <button onClick={()=> dispatch({type:"INCREMENT",value:5})}>Increment by 5</button>
        <button onClick={()=> dispatch({type:"DECREMENT",value:5})}>Decrement by 5</button>
        <div>{count.secondCount}</div>
        <button onClick={()=> dispatch({type:"INCREMENT1",value:5})}>Increment by secondCount</button>
        <button onClick={()=> dispatch({type:"DECREMENT1",value:5})}>Decrement by secondCount</button>
        <button onClick={()=> dispatch({type:"RESET"})}>Reset</button>
      
    </div>
  )
}

export default ReducerCounter1
