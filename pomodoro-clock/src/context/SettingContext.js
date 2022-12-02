import React ,{ useContext, useState } from 'react';

const AppContext=React.createContext();

const AppProvider=({children}) =>{

    const [pomdoro,setPomdoro]=useState(0);
    const [executing,setExecuting]=useState({});
    const [startanimate,setStartAnimate]=useState(false);


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
        setPomdoro(0);
    }

    const updateExecute = updatedSetting =>{
        setExecuting(updatedSetting);
        setTimerTime(updatedSetting);
    }

    const setTimerTime = evaluate =>{
        switch(evaluate.active){
            case'work':
                setPomdoro(evaluate.work);
                break;

            case'short':
                setPomdoro(evaluate.short);
                break;
            
            case'long':
                setPomdoro(evaluate.long);
                break;

            default:
                setPomdoro(0);
                break;
        }

    }
    return  <AppContext.Provider value={{
        stopTimer,
        startTimer,
        pauseTimer,
        updateExecute
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};