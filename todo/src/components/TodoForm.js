import React from 'react';
import { TextField,Button} from '@mui/material';

const TodoForm = () => {
  return (
    <div className='todo__todoForm'>
      
      <TextField 
      label="Add todo"/>
      <Button>Add Todo</Button>

    </div>
  )
}

export default TodoForm
