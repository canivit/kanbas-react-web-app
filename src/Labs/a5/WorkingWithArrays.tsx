import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export function WorkingWithArrays() {
  const baseUrl = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | false>(false);

  const fetchTodos = async () => {
    const response = await axios.get(baseUrl);
    setTodos(response.data);
  };

  const deleteTodo = async (todoId: number) => {
    try {
      await axios.delete(`${baseUrl}/${todoId}`);
      const newTodos = todos.filter((t) => t.id !== todoId);
      setTodos(newTodos);
    } catch (error: unknown) {
      handleError(error);
    }
  };

  const createTodo = async () => {
    const response = await axios.post(baseUrl, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodoById = async (id: number) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    setTodo(response.data);
  };

  const updateTodo = async () => {
    try {
      await axios.put(`${baseUrl}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo({
        id: 0,
        title: "",
        description: "",
        due: "",
        completed: false,
      });
    } catch (error: unknown) {
      handleError(error);
    }
  };

  function handleError(error: unknown) {
    if (error instanceof AxiosError) {
      setErrorMessage(error.response?.data?.message);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}
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
        readOnly
      />
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
      <textarea
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
        className="form-control mb-2"
      />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        value={todo.due}
        type="date"
        className="form-control mb-2"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          checked={todo.completed}
          type="checkbox"
          className="form-check-input mb-2 me-1"
        />
        Completed
      </label>
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTodo} className="btn btn-success mb-2 w-100">
        Update
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button
              onClick={() => deleteTodo(todo.id)}
              className="btn btn-danger float-end"
            >
              Remove
            </button>
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>
            <input
              checked={todo.completed}
              type="checkbox"
              readOnly
              className="form-check-input me-1 mb-2"
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface Todo {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
}
