//basic useEffect
import React,{ useState ,useEffect} from "react";
function App() {

  const [count ,setCount]=useState(0);
  useEffect(()=>{
    document.title=`you clicked ${count} times`;
})
  return (
    <div >
      <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  );
}

export default App;
