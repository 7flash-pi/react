import React from 'react';
import SingleTodo from './SingleTodo';

const Todos = ({todoList}) => {
  return (
    <div className='TodoList'>
        {
            todoList.map((todo,index) =>
                <SingleTodo  key={index }todo={todo} todoList={todoList}></SingleTodo>
            )
        }
    </div>
  )
}

export default Todos
