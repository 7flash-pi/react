import React, { useState } from 'react';
import Button from './Button';

const Setting = () => {

    //input handling useState
    const [newTimer,setNewTimer]=useState({
        work:2,
        short:0.1,
        long:1,
        active:'work'
    });

    //OnChange function

    const handleChange = (e) =>{
        const { name, value } = e.target;
        switch (name) {
            
            case 'work' : 
                setNewTimer({
                    ...newTimer,
                    work:parseInt(value)
                })
                break;
            
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short:parseInt(value)
                })
                break;

             case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long:parseInt(value)
                })
                break;
        }
        console.log(newTimer);
    }


    const handleSubmit = e =>{
        e.preventDefault();

    }

  return (
    <div className='form-container'>
        <form noValidate>
            <div className="input-wrapper">
                <input type="text" name='work' onChange={handleChange} value={newTimer.work} />
                <input type="text" name='shortBreak' onChange={handleChange} value={newTimer.short} />
                <input type="text" name='longBreak' onChange={handleChange} value={newTimer.long} />
            </div>
            <Button title='setTimer' _callback={ handleSubmit }/>
        </form>
      
    </div>
  )
}

export default Setting
