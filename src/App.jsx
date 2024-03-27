import {} from "react";

import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <h1>Learn about Redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
