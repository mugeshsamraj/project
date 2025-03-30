import axios from "axios";
import React, { useEffect, useState } from "react";

function HookCounter(){
    const [counter,setCounter] = useState(0);
    const [abi,setAbi] = useState('')
    function reset(){
        setCounter(0)
    }
    useEffect(()=>{
        rest(); 
    },[])
    function rest(){
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
            const item = res.data.title;
            setAbi(item)
            console.log('abi',item)
        })
        .catch((err)=>{
            console.log('err',err)
        })
    }
    return(
        <>
       
        <button onClick={()=> setCounter(counter + 1)}>Increment </button>
        {counter} 
        <button onClick={()=> setCounter(counter - 1)}>Decrement </button>
        <br/>
        <button onClick={()=>reset()}>Reset</button><br/>
        {abi}
        </>
    )
}
export default HookCounter;
