import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import db from '../firebaseConfig';
import {  where , query, getDoc, deleteDoc , collection , doc , onSnapshot } from 'firebase/firestore';

const SingleTodo = ({ text, todoId }) => {

  const deleteTodo = async(e) => {
    e.preventDefault();
    
     
    
    

  }

  return (
    <div className='singletodo'>
        <p>{text}</p>
        <div className="icons">
            <DeleteIcon onClick={deleteTodo}/>
            <EditIcon />

        </div>
        
    </div>
  )
}

export default SingleTodo
