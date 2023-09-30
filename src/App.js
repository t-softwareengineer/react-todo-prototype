import { useState } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

function App() {
  // HARDCODED! - Dummy Data
  const [todos, setTodos] = useState([
    {
      completed: false,
      text: 'Meeting at 2',
      xp: 15,
      id: 1
    },
    {
      completed: false,
      text: 'Drink Water!',
      xp: 15,
      id: 2
    },
    {
      completed: true,
      text: 'Learn HTML',
      xp: 15,
      id: 3
    }
  ]);

  // Create New Todo
  const createTodo = (todo) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  }

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Toggle Completed
  const toggleCompleted = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  return (
    <>
      <NavigationBar />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleCompleted} />
      <CreateTodo onCreate={createTodo} />
      <Footer />
    </>
  );
}

export default App;
