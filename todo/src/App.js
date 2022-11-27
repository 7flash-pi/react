import React  from 'react';
import TodoForm from './components/TodoForm';


const App = () => {
  return (
    <div className='app'>
     <h2 className='todo__header'>
      What's Up Today?
     </h2>
     <div className="todo__container">
        <TodoForm />
     </div>
     
    </div>
  )
}

export default App
