import React ,{ useState} from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

const App = () => {
  const [list,setList]=useState([]);

  
  return (
    <div className='app'>
     <div className="header">
      <h1>What's up Today? </h1>
     </div>
      <Todo list={list} setList={setList}/>
      <TodoList list={list} setList={setList}/>
    </div>
  )
}

export default App
