import React, { useState, useEffect } from 'react';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};



function App() {

  const [task,setTask]= useState('');
  const [list,setList]=useState([]);


  const removeTask=(id)=>{
    const newList=list.filter((task)=> task.id===id )
    setList(newList);
  }

  const addTask=(e)=>{
    e.preventDefault();
    if(task){
      const newtask={id:new Date().getTime().toString(),
      task:task};
      setList([...list,newtask]);
      setTask('');
    }
  }
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));

  },[list])

  
  return (
   <div className="containe">
    <div className="todo-form">
      <input type="text" value={task} placeholder='Enter New Task' onChange={(e)=> setTask(e.target.value) } />
      <button onClick={addTask}>Add Task</button>
    </div>

    <div className="todo-list">
        {list.map((item) =>{
            const {id,task}=item;
            return  <div className="todo-row" key={id}>
              <span>{task}</span>
              
                <button onClick={removeTask(id)}>Remove</button>

    
              </div>
          })

      }
    </div>
   </div>
  );
}

export default App;
