import React, { useEffect, useState } from "react";

function EffectMouse(){
    const [x,setX]= useState(0)
    const [y,setY]= useState(0)

    const logMousePointer = e =>{
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove',logMousePointer)
    },[])
    
    return(
        <>
        Hooks X-{x} - Y-{y}
        </>
    )
}
export default EffectMouse