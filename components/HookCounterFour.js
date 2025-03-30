import React, { useState } from "react";

function HookCounterFour(){
    const [data,setData] = useState([]);
    
    function addNewNumber(){
        setData([...data,{
            id: data.length,
            value: (Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={()=> addNewNumber()}>Add a new number</button>
            <ul >
                {data.map((item)=>(
                <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        
        </div>
    )
}
export default HookCounterFour;