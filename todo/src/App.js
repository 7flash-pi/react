import React ,{ useState }  from 'react';
import ShowList from './components/ShowList';
import TodoForm from './components/TodoForm';


const App = () => {
  const [edit,setEdit] = useState(false);

  return (
    <div className='app'>
      <div className="todo__continer">
         <h2>
          What's Up Today?
        </h2>
        <TodoForm edit={edit} setEdit={setEdit} />
        <ShowList setEdit={setEdit} />

      </div>
  </div>
  )
}

export default App
