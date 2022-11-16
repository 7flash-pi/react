import React ,{ useState , useEffect} from 'react';


function App() {
  const [timer,setTimer]=useState(0);
  const [pause,setPause]=useState(true);
  const [isActive,setIsActive]=useState(false);
  const [state,setState]=useState(true);


  const handlePause=()=>{
    setPause(!pause);
    setState(!state);

  }

  const handleStart=()=>{
    setIsActive(true);
    setPause(false);
    setState(!state);
  }
  useEffect(()=>{
    let interval=null;

    if(isActive && pause === false)
    {
      interval=setInterval(()=>{
        setTimer((time) => time + 10 );
      },10);
    }else{
      clearInterval(interval);
    }
    return ()=>{
      clearInterval(interval);
    };

   
  },[isActive,pause]);

  const handleReset=()=>{
    setIsActive(false);
    setTimer(0);
    setState(true);
  }

  return (
    <div className="App">
      <h2>Stopwatch</h2>
      <div className="stopwatch-container">
        <p>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)+" "}:
        {" "+("0" + Math.floor((timer / 1000) % 60)).slice(-2)+" "}: 
         {" "+("0" + ((timer / 10) % 100)).slice(-2)}

    </p>
        <div className="stopwatch-btn">
          <button className={`btn start ${ state ? 'green':'red'}`} onClick={ state ? handleStart : handlePause }>{ state ? 'Resume':'Pause'}</button>
          <button className="btn reset" onClick={handleReset}>Reset</button>

        </div>
      </div>
    </div>
  );
}

export default App;
