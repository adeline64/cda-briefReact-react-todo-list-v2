import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // Create a useEffect, install axios and call the API

  return (
    <div className='App'>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
