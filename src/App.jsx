import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [todos, setTodos] = useState([]);

  // install and import axios, create an useEffect hook, and call the API

  return (
    <div className='App'>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
