import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetchOne() {
    const [loading,setLoading] = useState(true);
    const [post,setPost] = useState({})
    const [err,setErr] = useState('')

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            setLoading(false);
            setPost(res.data);
            setErr('');
        })
        .catch(err=>{
            setLoading(false);
            setPost({});
            setErr('Error');
        })
    },[])
  return (
    <div>
      {post != '' ? post.title : ''}
      {err != '' ? err : null}
    </div>
  )
}

export default DataFetchOne
