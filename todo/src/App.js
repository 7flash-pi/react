import React from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='app'>
     <div className="header">
      <h1>What's up Today? </h1>
     </div>
      <Todo/>
      <TodoList/>
    </div>
  )
}

export default App
