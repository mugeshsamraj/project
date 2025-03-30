import React, { useEffect, useState } from "react";

function EffectOne(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `you clicked ${count}`
    })

    return(
        <>
        
        <button onClick={()=> setCount(count+1)}>you clicked {count} time</button>
        </>
    )
}
export default EffectOne;