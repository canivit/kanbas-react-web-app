import { NavigateFunction, useNavigate, useParams } from "react-router";
import { Assignment, db } from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function AssignmentEditor() {
  const params = useParams();
  const assignmentId = parseInt(params.assignmentId ? params.assignmentId : "");
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  return (
    <>
      {assignment ? (
        <>
          <TopBar />
          <AssignmentEditForm assignment={assignment} />
        </>
      ) : (
        <h2>Assignment Not Found</h2>
      )}
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

function AssignmentEditForm({ assignment }: { assignment: Assignment }) {
  const navigate = useNavigate();
  return (
    <>
      <label className="form-label">Assignment Name</label>
      <input className="form-control" defaultValue={assignment.title} />
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

        <form className="d-flex gap-2" action="./assignments.html">
          <Link
            to={`/Kanbas/Courses/${assignment.course}/Assignments`}
            className="btn wd-button"
          >
            Cancel
          </Link>
          <button
            onClick={handleSave(assignment.course, navigate)}
            className="btn wd-button wd-button-red"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );

  function handleSave(courseId: number, navigate: NavigateFunction) {
    return () => {
      console.log("Saving assignment");
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
  }
}
