import React ,{ useState } from 'react'

const TodoList = ({list}) => {

    const [done,setDone]=useState(false);
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
                        <button className='del-btn'>Delete</button>
                        <button className='edit-btn'>Edit</button>

                    </div>
                </div>
            })
         }
       
      
    </>
  )
}

export default TodoList
