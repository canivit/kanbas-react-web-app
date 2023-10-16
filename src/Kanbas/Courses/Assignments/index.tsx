import { useParams } from "react-router";
import { Assignment, db } from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEllipsisVertical,
  faPlus,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export function Assignments() {
  const params = useParams();
  const courseId = parseInt(params.courseId ? params.courseId : "");
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <>
      <TopBar />
      <AssignmentList assignments={assignments} />
    </>
  );
}

function TopBar() {
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
          <button type="submit" className="btn wd-button-red">
            <FontAwesomeIcon icon={faPlus} className="me-1" />
            Assignment
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

function AssignmentList({ assignments }: { assignments: Assignment[] }) {
  return (
    <ul className="list-group rounded-0">
      <li className="list-group-item list-group-item-secondary">
        <div className="d-flex flex-row align-items-center">
          <FontAwesomeIcon icon={faSortDown} className="pe-2" />
          <b className="flex-fill">Assignments</b>

          <button className="btn" type="button">
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <button className="btn" type="button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </li>
      {assignments.map((assignment) => (
        <AssignmentItem assignment={assignment} key={assignment._id}/>
      ))}
    </ul>
  );
}

function AssignmentItem({ assignment }: { assignment: Assignment }) {
  return (
    <li className="list-group-item" style={{ borderLeft: "4px solid green" }}>
      <div className="d-flex flex-row align-items-center">
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="xl"
          className="wd-check-icon ps-3 me-4"
          style={{ color: "green" }}
        />
        <div className="flex-fill">
          <Link
            to={`${assignment._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <b>{assignment.title}</b>
          </Link>
        </div>
        <button className="btn" type="button">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
        </button>

        <button className="btn" type="button">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
    </li>
  );
}
