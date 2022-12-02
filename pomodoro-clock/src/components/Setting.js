import React, { useState } from 'react';
import Button from './Button';

const Setting = () => {

    //input handling useState
    const [newTimer,setNewTimer]=useState({
        work:2,
        short:0.1,
        long:2,
        active:'work'
    });

    //OnChange function

    const handleChange = (e) =>{
        const { name, value } = e.target;
        switch (name) {
            
            case 'work' : 
                setNewTimer({
                    ...newTimer,
                    work:value
                 })
                break;
            
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short:value
                })
                break;

             case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long:value
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
            <Button title='Set Timer' _callback={ handleSubmit }/>
        </form>
      
    </div>
  )
}

export default Setting
