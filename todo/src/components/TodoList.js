import React ,{ useState } from 'react'

const TodoList = ({list,setList}) => {

    const [done,setDone]=useState(false);
    const delTask=(id)=>{
        let newList=list.filter((task)=> task.id!==id);
        setList(newList);
    }
  return (
    <>
        
         {
            list.map((singleTask)=>{
                const {id,task}=singleTask;
                return <div className='SigleTodo' key={id}>
                    <div className="task">
                        <p className={done ? 'done' :'not-done'}>{task}</p>
                    </div>
                    <div className="btn">
                        <button className='Completed-btn' onClick={()=>setDone(!done)}> Done</button>
                        <button className='del-btn' onClick={delTask(id)}>Delete</button>
                        <button className='edit-btn'>Edit</button>

                    </div>
                </div>
            })
         }
       
      
    </>
  )
}

export default TodoList
