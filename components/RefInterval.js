import React, { useEffect, useRef, useState } from 'react'

function RefInterval() {
    const [timer,setTimer] = useState(0)
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current = setInterval(()=>{
            setTimer(prev => prev + 1)
        },1000)
        return()=>{
            clearInterval(inputRef.current)
        }
    },[])
  return (
    <div>
      {timer}
      <button onClick={()=>clearInterval(inputRef.current)}>Clear</button>
    </div>
  )
}

export default RefInterval
