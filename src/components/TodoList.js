import TodoItem from './TodoItem';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { MdNotifications } from 'react-icons/md';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <>
      <Button variant="primary">
        <MdNotifications /> <Badge bg="danger">{todos.length}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  );
}

export default TodoList;