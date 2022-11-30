import React from 'react';
import MyTimer from './components/MyTimer';
const time=new Date();
time .setSeconds(time.getSeconds()+600);

const App = () => {
  return (
    <div className='app'>
      <h2>Stop Watch</h2>
      <MyTimer expiryTimestamp={time} />
    </div>
  )
}

export default App
