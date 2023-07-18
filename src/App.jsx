import { useState } from 'react';
import './App.css';
import TodoList from './components/ToDoList';

function App() {
    const [count, setCount] = useState(0);

    return <TodoList />;
}

export default App;
