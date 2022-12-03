import React ,{ useContext, useState } from 'react';

const AppContext=React.createContext();

const AppProvider=(props) =>{

    const [pomodoro,setPomodoro]=useState(0);
    const [executing,setExecuting]=useState({});
    const [startanimate,setStartAnimate]=useState(false);

    const setCurrentTimer = activeState =>{
        setExecuting({...executing, 
        active:activeState})
        setTimerTime(executing);
    }


    const startTimer = () =>{
        setStartAnimate(true);
    }

    const pauseTimer = () =>{
        setStartAnimate(false);
    }

    const stopTimer = () =>{
        setStartAnimate(false);
    }

    const settingBtn = () => {
        setExecuting({});
        setPomodoro(0);
    }

    const updateExecute = updatedSetting =>{
        setExecuting(updatedSetting);
        setTimerTime(updatedSetting);
    }

    const setTimerTime = evaluate =>{
        switch(evaluate.active){
            case'work':
                setPomodoro(evaluate.work);
                break;

            case'short':
                setPomodoro(evaluate.short);
                break;
            
            case'long':
                setPomodoro(evaluate.long);
                break;

            default:
                setPomodoro(0);
                break;
        }

    }

    const children = remainingTime =>{

        const minutes=Math.floor(remainingTime /60);
        const seconds = remainingTime % 60 ;
        return `${minutes}:${seconds}`;

    }


    return  <AppContext.Provider value={{
        stopTimer,
        startTimer,
        pauseTimer,
        updateExecute,
        pomodoro,
        executing,
        startanimate,
        settingBtn,
        updateExecute,
        children
  }}>

        {props.children}

    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};