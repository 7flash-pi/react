import React  from 'react';
import { useGlobalContext } from './context';

const TodoList = () => {
    
    const {list,completedTask,removeTask,setInput,setEdit,setEditId}=useGlobalContext();

    const editTask=(id) =>{
      const specificItem= list.find((item) => item.id === id);
        setEditId(id);
        setEdit(true);
        setInput(specificItem.task)
      
    }

  return (
    
    <>
        
         {
            list.map((singleTask)=>{
                return <div className='SigleTodo' key={singleTask.id}>
                    <div className="task">
                        <p className={ singleTask.state ? 'done' :'not-done'}>{singleTask.task}</p>
                    </div>
                    <div className="btn">
                        <button className='Completed-btn' onClick={ event => completedTask(event,singleTask.id)}> Done</button>
                        <button className='del-btn'  onClick={event => removeTask(event,singleTask.id)}>Delete</button>
                        <button className='edit-btn' onClick={editTask(singleTask.id)}>Edit</button>

                    </div>
                </div>
            })
         }
       
      
    </>
  )
}

export default TodoList
