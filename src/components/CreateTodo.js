import { useState } from 'react';

const CreateTodo = ({ onCreate }) => {
  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!text) {
      alert('Add a Todo. Cannot be EMPTY!!!');
      return;
    }

    onCreate({ text, completed });

    setText('');
    setCompleted(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Create a New Todo:</label>
      <input type="text" placeholder="Create Todo" value={text} onChange={(e) => setText(e.target.value)} />
      <label>Complete</label>
      <input type="checkbox" checked={completed} value={completed} onChange={(e) => setCompleted(e.currentTarget.checked)}/>
      <input type="submit" value="Save Todo" className="btn btn-outline-primary" /> 
    </form>
  );
}

export default CreateTodo;