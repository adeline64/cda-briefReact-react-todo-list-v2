// import { useState } from "react";
import React, { useState, useEffect } from 'react';
import "./App.css";
import TodoList from "./components/TodoList";
import axios from 'axios';

const API_URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [todos, setTodos] = useState([]);

  // install and import axios, create an useEffect hook, and call the API
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setTodos(response.data)
      })
  }, []);

  return (
    <div className='App'>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
