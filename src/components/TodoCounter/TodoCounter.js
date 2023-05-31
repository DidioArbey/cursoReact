import './TodoCounter.css';

function TodoCounter({total, completed}){
    return(
        <h2 className='title'>
          Has completado {total} de {completed} Todos
        </h2>
    );
  }

export {TodoCounter};