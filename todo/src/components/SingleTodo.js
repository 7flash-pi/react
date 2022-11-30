import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import db from '../firebaseConfig';
import { deleteDoc ,doc ,updateDoc  } from 'firebase/firestore';
import { useGlobalContext } from './context';

const SingleTodo = ({ text, todoId }) => {
  const { setEdit,setEditId, setInput }=useGlobalContext();

  //Deleting Document
  const deleteTodo = async(e) => {
    e.preventDefault();
    console.log(todoId);
    await deleteDoc(doc(db,'todos',todoId));
     }

  //Updating Document
  const updateTodo= (e) =>{
    e.preventDefault();
    setEdit(true);
    setEditId(todoId);
    setInput(text);
    }
  

  return (
    <div className='singletodo'>
        <p>{text}</p>
        <div className="icons">
            <DeleteIcon onClick={deleteTodo}/>
            <EditIcon onClick={updateTodo}  />

        </div>
        
    </div>
  )
}

export default SingleTodo
