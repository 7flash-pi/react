import React from 'react';
import { useTimer } from 'react-timer-hook';

const MyTimer = ({ expiryTimestamp }) => {

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart

    }=({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  return (
    <div className='myTimer'>
        <div className="stopwatch-container">
            <p><span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></p>
        </div>
        <p>{isRunning? 'Running' :'Not Running'}</p>
        <button onClick={start} className='btn'>Start</button>
        <button onClick={pause} className='btn'>Pause</button>
        <button onClick={resume}  className='btn'>Resume</button>

      
    </div>
  )
}

export default MyTimer
