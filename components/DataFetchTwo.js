import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    post : {},
    err : ''
}
const reducer = (state,action) => {
    switch(action.type){
        case "SUCCESS":
            return {
                loading: false,
                post : action.payload,
                err : ''
            }
        case "ERROR":
            return {
                loading: false,
                post : {},
                err : 'error'
            }
        default :
        return {
            state
        }

    }

}

function DataFetchTwo() {
    const [state,dispatch] = useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            dispatch({type:"SUCCESS",payload:res.data})
        })
        .catch(err=>{
            dispatch({type:"ERROR"})
        })
    },[])
  return (
    <div>
      {state.loading  ? "Loading" : state.post?.title }
      {state.err == '' ? state.err : null}
    </div>
  )
}

export default DataFetchTwo
