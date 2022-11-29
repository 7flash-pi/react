import React,{ useEffect } from 'react';
import SingleTodo from './SingleTodo';
import { useGlobalContext } from './context';


const ShowList = () => {

    const { fetchTodos , todos}=useGlobalContext();

    useEffect(() => {
      fetchTodos();
    },[])

  return (
    <div className='showlist'>
        {
            todos.map( todo=> <SingleTodo text={todo.text} todoId={todo.id} key={todo.id}   />)
        }
    </div>
  )
}

export default ShowList
