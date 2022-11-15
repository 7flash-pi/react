import React  from 'react';
import { useGlobalContext } from './context';

const Todo = () => {

    const { addNewTask ,input,setInput}=useGlobalContext();
    

  return (
    <div className='todo-container'>
        <form className='todo-form'>
            <input type="text" 
            placeholder='New Task'
            value={input}
            onChange={((e)=> setInput(e.target.value)) } />
            <button onClick={addNewTask}>Add Task</button>
        </form>
      
    </div>
  )
}

export default Todo
