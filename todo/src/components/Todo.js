import React from 'react'

const Todo = () => {
  return (
    <div className='todo-container'>
        <form className='todo-form'>
            <input type="text" placeholder='New Task' />
            <button>Add Task</button>
        </form>
      
    </div>
  )
}

export default Todo
