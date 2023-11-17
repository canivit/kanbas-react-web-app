import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Assignment } from "../../client/assignment";

export function AssignmentEditor({
  assignment,
  onSaveHandler,
  onCancelHandler,
}: {
  assignment: Assignment;
  onSaveHandler: (assignment: Assignment) => void;
  onCancelHandler: () => void;
}) {
  const [currentAssignment, setAssignment] = useState(assignment);

  return (
    <>
      <TopBar />
      <AssignmentEditForm
        assignment={currentAssignment}
        onChangeHandler={setAssignment}
        onSaveHandler={onSaveHandler}
        onCancelHandler={onCancelHandler}
      />
    </>
  );
}

function TopBar() {
  return (
    <>
      <div className="d-flex justify-content-end">
        <div>
          <button type="submit" className="btn" style={{ color: "green" }}>
            <FontAwesomeIcon icon={faCircleCheck} className="me-1" />
            Published
          </button>
          <button type="submit" className="btn wd-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

function AssignmentEditForm({
  assignment,
  onChangeHandler,
  onSaveHandler,
  onCancelHandler,
}: {
  assignment: Assignment;
  onChangeHandler: (assignment: Assignment) => void;
  onSaveHandler: (assignment: Assignment) => void;
  onCancelHandler: () => void;
}) {
  return (
    <>
      <label className="form-label">Assignment Name</label>
      <input
        className="form-control"
        defaultValue={assignment.title}
        onChange={(e) =>
          onChangeHandler({ ...assignment, title: e.target.value })
        }
      />
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="notifyCheck"
          />
          <label className="form-check-label">
            Notify users that this content has changed
          </label>
        </div>

        <form className="d-flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              onCancelHandler();
            }}
            className="btn wd-button"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              onSaveHandler(assignment);
            }}
            className="btn wd-button wd-button-red"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
