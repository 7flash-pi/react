import React, { useContext } from "react";

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const Name="today";
    var add= (a ,b)=>{
        return a+b;
    }

    return <AppContext.Provider
     value={{
        Name,
        add
     }}>
        {children}

    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};