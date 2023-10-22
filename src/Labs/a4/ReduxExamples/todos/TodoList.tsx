import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { LabState } from "../../../store";
import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((state: LabState) => state.todosReducer.todos);
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}
