import React, { useEffect, useState }  from 'react';
import ShowList from './components/ShowList';
import TodoForm from './components/TodoForm';
import db from './firebaseConfig';
import {  onSnapshot, collection, query } from "firebase/firestore";

const App = () => {

    const [todos,setTodos]=useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"))
        const unsub = onSnapshot(q, (querySnapshot) => {
        const newtodos=querySnapshot.docs.map(d => d.data());
        setTodos(newtodos);
        console.log(todos);;
      });
      return unsub;
    },[])

  return (
    <div className='app'>
      <div className="todo__continer">
         <h2>
          What's Up Today?
        </h2>
        <TodoForm />
        <ShowList todos={todos}/>

      </div>
  </div>
  )
}

export default App
