import React from "react";

function TodoItem(props) {
  const { title, completed } = props;
  return (
    <li>
      <span>{title}</span> ({completed ? "is done" : "to do"})
    </li>
  );
}

export default TodoItem;
