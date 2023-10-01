import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { MdNotifications } from 'react-icons/md';

function TotalTodos({todo}) {
  return (
    <Button variant="primary">
      <MdNotifications /> <Badge bg="secondary">{todo.id}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default TotalTodos;