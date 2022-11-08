import React from 'react';
import { useGlobalContext } from '../context';


const Add = () => {

    const {add}=useGlobalContext();
  return (
    <div >
      <p>8+9={add(8,9)}</p>
    </div>
  )
}

export default Add
