import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { AssignmentList } from "./AssignmentList";

export function Assignments() {
  const params = useParams();
  const courseId = parseInt(params.courseId ? params.courseId : "");
  const assignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  ).filter((a) => a.course === courseId);

  return (
    <>
      <TopBar courseId={courseId} />
      <AssignmentList assignments={assignments} />
    </>
  );
}

function TopBar({ courseId }: { courseId: number }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <input
          className="form-control float-start w-25"
          placeholder="Search for Assignment"
        />

        <div className="d-grid d-flex gap-2">
          <button type="submit" className="btn wd-button">
            <FontAwesomeIcon icon={faPlus} className="me-1" />
            Group
          </button>
          <Link
            to={`/Kanbas/courses/${courseId}/CreateAssignment`}
            type="submit"
            className="btn wd-button-red"
          >
            <FontAwesomeIcon icon={faPlus} className="me-1" />
            Assignment
          </Link>
          <button type="submit" className="btn wd-button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
