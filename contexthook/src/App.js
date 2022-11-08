import React from 'react';
import { useGlobalContext } from './context'
import Add from './components/Add';


function App() {
  const { Name,add }=useGlobalContext();
  return (
    <>
      <h1>{Name} {console.log(Name)}</h1>
      <p>5+6={add(5,6)}</p>
       <Add></Add>
    </>
  );
}

export default App;
