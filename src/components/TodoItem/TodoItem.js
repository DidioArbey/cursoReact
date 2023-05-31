import './TodoItem.css'
function TodoItem(props) {
    return (
        <li className="todo-item">
            <span> ✔ </span>
            <p>{props.text}</p>
            <span> ❌ </span>
        </li>
    );
}
export { TodoItem };
