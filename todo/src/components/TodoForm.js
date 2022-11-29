import React from 'react';
import { useState } from 'react';
import db from '../firebaseConfig';
import { doc, setDoc} from 'firebase/firestore';

const TodoForm = ({edit,setEdit}) => {

  const [input,setInput]=useState('');
 

  const addTodo=async(e)=>{
    e.preventDefault();
    const dateId=new Date().getTime().toString();
    if(input){
        await setDoc(doc(db, "todos", dateId), {
          text: input,
          id: dateId
        });
      setInput('');
    }
    if(edit){
      setInput()
    }
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
