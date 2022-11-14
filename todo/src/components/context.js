import React , { useState ,useContext } from 'react';

const AppProvider=({children}) =>{

    
    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export { AppProvider }