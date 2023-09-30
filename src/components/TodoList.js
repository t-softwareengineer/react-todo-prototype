import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  );
}

export default TodoList;