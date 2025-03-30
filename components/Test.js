import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Test() {
    const [data,setData] = useState([])
    useEffect(()=>{
        demo()
    })
    function demo(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            const result = res.data;
            setData(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='row'>
        {/* {data.map((item,index)=>{
            return(
               
                <div key={index} className='card'>
                   <p> {item.title} -  {item.id}</p>
                   <p> {item.body}</p>
                </div>
                
            )
        })

        } */}
        <div className='cards'>
            <p>SAm</p>
        </div>
        <div className='cards'>
            <p>SAm</p>
        </div>
        <div className='cards'>
            <p>SAm</p>
        </div>

      
    </div>
  )
}

export default Test
