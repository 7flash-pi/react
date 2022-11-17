import React from 'react';
import { useCountdown } from './hooks/useCountDown';
import ShowCount from './component/ShowCount';

const Countdown = ({ targetDate }) => {

  const[days,hours,minutes,seconds]=useCountdown(targetDate);
  return (
    <div className='App'>
        <h2>CountDown</h2>
        <ShowCount  
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds} 
        />

      
    </div>
  )
}

export default Countdown
