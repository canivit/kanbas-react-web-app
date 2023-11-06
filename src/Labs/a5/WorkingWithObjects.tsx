import { useState } from "react";

export function WorkingWithObjects() {
  const baseUrl = "http://localhost:4000/a5";
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 100,
  });

  return (
    <div>
      <h3>Working With Objects</h3>

      <h4>Retrieving Objects</h4>
      <a href={`${baseUrl}/assignment}`} className="btn btn-primary me-2">
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>
      <a href={`${baseUrl}/assignment/title}`} className="btn btn-primary me-2">
        Get Title
      </a>

      <h4>Modifying Properties</h4>
      <a
        href={`${baseUrl}/assignment/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />

      <a
        href={`${baseUrl}/assignment/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Score
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.valueAsNumber })
        }
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number"
      />

      <a
        href={`${baseUrl}/assignment/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Completed
      </a>
      <input
      onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        className="form-check-input"
        type="checkbox"
        checked={assignment.completed}
        id="completedCheckbox"
      />
      <label className="form-check-label" htmlFor="completedCheckbox">
        Completed
      </label>
    </div>
  );
}
