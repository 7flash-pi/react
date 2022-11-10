import React, { useState } from 'react';
import Todos from './components/Todos';


function App() {

  const [ todoList, setTodoList] = useState([]);
  const [task,setTask]= useState('');

  const handleClick=(e)=>{
    e.preventDefault();
    if(task){
      setTodoList([...todoList,task]);
      setTask('');
    }
  }
  return (
   <div className="containe">
    <div className="todo-form">
      <input type="text" value={task} placeholder='Enter New Task' onChange={(e)=> setTask(e.target.value) } />
      <button onClick={handleClick}>Add Task</button>
      <Todos todoList={todoList}></Todos>
    </div>
   </div>
  );
}

export default App;
