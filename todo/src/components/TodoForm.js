import React from 'react';
import { useGlobalContext } from './context';

const TodoForm = () => {
 const {setInput ,addTodo ,input}=useGlobalContext();


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
