import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetch(){
    const [data,setData] = useState({})
    const [id,setId] = useState(1)
    useEffect(()=>{
        DataFunction()
    },[id])
    function DataFunction(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
            <input value={id} onChange={e=> setId(e.target.value)} />
            <p>{data.title}</p>
            {/* <ul>
                {data.map(item=>{
                     return(
                        <li key={item.id}>{item.title}</li>
                     )
                })}
               
            </ul> */}
        </div>
    )
}
export default DataFetch;