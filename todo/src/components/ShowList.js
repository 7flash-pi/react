import React,{useState, useEffect } from 'react';
import SingleTodo from './SingleTodo';
import db from '../firebaseConfig';
import {  onSnapshot, collection, query  } from "firebase/firestore";

const ShowList = () => {

  const [todos,setTodos]=useState([]);

  useEffect(() => {
      const q = query(collection(db, "todos"))
      const unsub = onSnapshot(q, (querySnapshot) => {
      const newtodos=querySnapshot.docs.map(d => d.data());
      setTodos(newtodos);
      console.log(newtodos);;
    });
  },[])

  return (
    <div className='showlist'>
        {
            todos.map( todo=> <SingleTodo text={todo.text}/>)
        }
       
      
    </div>
  )
}

export default ShowList
