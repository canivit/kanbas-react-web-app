import { useState } from "react";

export function WorkingWithArrays() {
  const baseUrl = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  return (
    <div>
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a href={baseUrl} className="btn btn-primary me-2">
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        type="number"
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.valueAsNumber })}
      />
      <a href={`${baseUrl}/${todo.id}`} className="btn btn-primary me-2">
        Get Todo by ID
      </a>

      <h4>Filtering Array Items</h4>
      <a href={`${baseUrl}?completed=true`} className="btn btn-primary me-2">
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a href={`${baseUrl}/create`} className="btn btn-primary me-2 mb-2">
        Create Todo
      </a>

      <h4>Deleting from an Array</h4>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.valueAsNumber,
          })
        }
        className="form-control mb-2"
        type="number"
      />
      <a href={`${baseUrl}/${todo.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      <h3>Updating an Item in an Array</h3>
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${baseUrl}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2 mb-4"
      >
        Update Title to {todo.title}
      </a>
      <br />
      <input
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        className="form-check-input me-1"
        type="checkbox"
        checked={todo.completed}
        id="completedTodoCheckbox"
      />
      <label className="form-check-label" htmlFor="completedTodoCheckbox">
        Completed
      </label>
      <br />
      <a
        href={`${baseUrl}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2 mb-4"
      >
        Update Completed to {todo.completed.toString()}
      </a>

      <textarea
        value={todo.description}
        rows={5}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        className="form-control mb-2"
      />
      <a
        href={`${baseUrl}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2"
      >
        Update Description
      </a>
    </div>
  );
}
