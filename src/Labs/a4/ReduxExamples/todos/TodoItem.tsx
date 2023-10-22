import { useDispatch } from "react-redux";
import { Todo, deleteTodo, setTodo } from "./todosReducer";

export function TodoItem({ todo }: { todo: Todo }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
      {todo.title}
    </li>
  );
}
