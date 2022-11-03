import React, { useState } from 'react'

const CounterHook = () => {
    const initialCount=0;
    const [count,setCount]=useState(initialCount);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

export default CounterHook
