import React from 'react';
import SingleTodo from './SingleTodo';

const ShowList = ({todos}) => {
  return (
    <div className='showlist'>
        {
            todos.map((singleTodo)=>{
                    <SingleTodo text={singleTodo.text} />
            })
        }
       
      
    </div>
  )
}

export default ShowList
