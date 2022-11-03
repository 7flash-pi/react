
//usestate with array
import React ,{ useState } from 'react'

const CounterArray = () => {
    const [items,setItems]=useState([]);
    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*1000)+1
        }])
    }

  return (
    <div>
        <button onClick={addItem}>Add new</button>

        <ul>
            {
                items.map(item => (
                    <li key={item.id}> {item.value} </li>
                ))
            }
        </ul>
      
    </div>
  )
}

export default CounterArray
