//data fetching on Click

import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const ClickFetch = () => {

const [post,setPost]=useState({});
const [id,setId]=useState(1);
const [clickId,setClickId]=useState(1);

const handleClick=()=>{
    setClickId(id);
}


useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${clickId}`)
        .then(res =>{
            setPost(res.data)
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
},[clickId])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={handleClick} >Fetch Data</button>
        <p>{post.title}</p>
      
    </div>
  )
}

export default ClickFetch
