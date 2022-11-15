import React , { useState ,useContext , useEffect } from 'react';

const AppContext=React.createContext();

const AppProvider=({children}) =>{

    const [list,setList]=useState([]);
    const [input,setInput]=useState('');
    const [load,setLoad]=useState();
    const [edit,setEdit]=useState(false);
    const[editId,setEditId]=useState(null);
    
    useEffect( ()=>{},[load])


    const removeTask=(event,id)=>{
        event.preventDefault();
        const newList=list.filter((item) =>  item.id!==id)
        setList(newList);

    }
    

    const completedTask=(event,id)=>{
        event.preventDefault();
        list.filter((item)=> {
            if(item.id === id){
                item.state= true;
                setLoad(true);
            }
        })
        

    }
    const addNewTask=(event)=>{
        event.preventDefault();
        if(input && edit){
                
                setList(list.map((item) => {
                    if (item.id === editId) {
                        return { ...item, task: input };
                    }
                    return item;
                    }))
                setInput('');
                setEditId(null);
                setEdit(false);
        }
        else{
            const newInput= { id : new Date().getTime().toString(),
            task:input, state:false};
            setList([...list,newInput]);
            setInput('');
            setLoad(false);
            setEdit(false);
        
        }
    }

    return <AppContext.Provider value={{
        list,
        setList,
        addNewTask,
        input,
        setInput,
        completedTask,
        removeTask,
        setEdit,
        setEditId
    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export { AppProvider }