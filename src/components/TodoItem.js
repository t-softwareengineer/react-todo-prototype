const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div
      className={`${todo.completed && 'text-decoration-line-through'}`}
      onDoubleClick={() => onToggle(todo.id)}
    >
      <p className="display-3">{todo.text}</p>
      <button 
        className="btn btn-danger"
        onClick={() => onDelete(todo.id)}
      > Delete
      </button>
    </div>
  );
}

export default TodoItem;