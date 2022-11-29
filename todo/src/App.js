import React ,{ useState }  from 'react';
import ShowList from './components/ShowList';
import TodoForm from './components/TodoForm';


const App = () => {

  return (
    <div className='app'>
      <div className="todo__continer">
         <h2>
          What's Up Today?
        </h2>
        <TodoForm  />
        <ShowList  />

      </div>
  </div>
  )
}

export default App
