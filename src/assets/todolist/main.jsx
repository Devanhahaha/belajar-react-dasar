import Todo from "./Todo";
import './todolist.css';
import TodoList from "./TodoList";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render (
    <StrictMode>
    <TodoList>
    <Todo/>
    </TodoList>
  </StrictMode>,
)