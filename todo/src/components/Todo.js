import React , { useState } from 'react'

const Todo = ({list ,setList}) => {

    const [input,setInput]=useState('');
    

    const addNewTask=(e)=>{
        e.preventDefault();
        const newInput= { id : new Date().getTime().toString(),
        task:input};
        setList([...list,newInput]);
        setInput('');
        
    }
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
