import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos } = props;
  return (
    <div>
      <h1>My todo list:</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
