import { useState } from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  // HARDCODED! - Dummy Data
  const [todos, setTodos] = useState([
    {
      completed: false,
      text: 'Meeting at 2',
      id: 1
    },
    {
      completed: false,
      text: 'Drink Water!',
      id: 2
    },
    {
      completed: true,
      text: 'Learn HTML',
      id: 3
    }
  ]);
  
  return (
    <>
      <NavigationBar />
      <Footer />
    </>
  );
}

export default App;
