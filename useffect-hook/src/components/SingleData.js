//single data Fetching

import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const SingleData = () => {

const [post,setPost]=useState({});
const [id,setId]=useState(1);

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            setPost(res.data)
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
},[id])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <p>{post.title}</p>
      
    </div>
  )
}

export default SingleData
