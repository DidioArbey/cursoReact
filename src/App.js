
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoBotton } from './components/CreateTodoBotton/CreateTodoBotton';
import React from 'react';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Cortar Tomate', completed: false },
  { text: 'Calentar aceite', completed: false },
  { text: 'encender estufa', completed: false }
];


function App() {
  return (
    <React.Fragment>
      <grid className='grid-container'>
        <div className='grid-item1' >
          <CreateTodoBotton />
          
        </div>
        <div className='grid-item2'>
          <h1>Tus tareas</h1>
          <TodoCounter completed={16} total={25} />
          <TodoSearch />
          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>
        </div>
      </grid>
    </React.Fragment>



  );
}






export default App;
