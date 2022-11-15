import React  from 'react';
import { useTimer } from 'react-timer-hook';


function MyTimer({ expiryTimestamp }) 
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

function App() {

  return (
    <div className="App">
      <h2>Stopwatch</h2>
      <div className="stopwatch-container">
        <p>{days}:{hours}:{minutes}:{seconds}</p>
        <div className="stopwatch-btn">
          <button className="btn start" onClick={start}>Start</button>
          <button className="btn reset" >Reset</button>

        </div>
      </div>
    </div>
  );
}

export default App;
