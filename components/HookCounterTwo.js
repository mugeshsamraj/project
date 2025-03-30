import React, { useState } from "react";

function HookCounterTwo(){
    let initialCounter = 0;
    const [counter,setCounter] = useState(initialCounter)
    return(
        <>
        Counter {counter}
        <button onClick={()=>setCounter(prevCounter => prevCounter - 1)}>Decrement</button>
        <button onClick={()=>setCounter(initialCounter)}>Reset</button>
        <button onClick={()=>setCounter(prevCounter => prevCounter + 1)}>Increment</button>
        </>
    )
}
export default HookCounterTwo;