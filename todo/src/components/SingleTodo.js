import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const SingleTodo = ({text}) => {
  return (
    <div className='singletodo'>
        <p>{text}</p>
        <div className="icons">
            <DeleteIcon />
            <EditIcon />

        </div>
        
    </div>
  )
}

export default SingleTodo
