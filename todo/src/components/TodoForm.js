import React from 'react';
import { useState } from 'react';
import db from '../firebaseConfig';
import { doc, addDoc,collection} from 'firebase/firestore';

const TodoForm = () => {

  const [input,setInput]=useState('');

  const addTodo=async(e)=>{
    e.preventDefault();
    if(input){
       await addDoc(collection(db,'todos'),{
        text:input ,
        id:new Date().getTime().toString()
      });
      
    }
    setInput('');


  }
  return (
    <div className='todo__todoForm'>
      
      <input 
      type="text"
       placeholder="Add todo..." 
       value={input}
       onChange={e => setInput(e.target.value)}/>
      <button type="submit" onClick={addTodo}>Add</button>
    

    </div>
  )
}

export default TodoForm
