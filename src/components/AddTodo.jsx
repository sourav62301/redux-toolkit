import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter a Todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="Submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
