import React from 'react'

const SingleTodo = ({todo,todoList}) => {


  return (
    <div className='singleTodo'>
        <span>{todo}</span>
        <button> Remove</button>
      
    </div>
  )
}

export default SingleTodo
