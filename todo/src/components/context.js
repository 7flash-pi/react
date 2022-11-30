import React, { useContext, useState } from "react";
import db from '../firebaseConfig';
import { doc, setDoc , query , collection , onSnapshot, updateDoc} from 'firebase/firestore';


const AppContext=React.createContext();

const AppProvider=({children})=>{

    const [input,setInput]=useState('');
    const [todos,setTodos]=useState([]);
    const [edit,setEdit]=useState(false);
    const [editId,setEditId]=useState(null);

    //Adding Document or pushing new data to firebase 
    const addTodo=async(e)=>{
        e.preventDefault();
        const dateId=new Date().getTime().toString();
        if(input &&  edit === false){
            await setDoc(doc(db, "todos", dateId), {
            text: input,
            id: dateId
            });
            } 
        if(edit){
            const conRef=doc(db,'todos',editId);
            await updateDoc(conRef,{text:input});
        }
        setEdit(false);
        setEditId(null);
        setInput('')
        
    }

    //Fetch Data from firebase

    const fetchTodos=async() =>{
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const newtodos=querySnapshot.docs.map(d => d.data());
            setTodos(newtodos);
            console.log();
        });
    }

    return <AppContext.Provider
     value={{
        input,
        setInput,
        addTodo,
        fetchTodos,
        todos,
        edit,
        setEdit,
        setEditId
        }}>
        {children}

    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppProvider};
