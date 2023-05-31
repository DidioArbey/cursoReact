import './TodoList.css'
function TodoList({children}){
    return(
        <ul ClassName="todo-list">
            {children}
        </ul>
    );
}

export {TodoList};