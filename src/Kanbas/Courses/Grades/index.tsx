import { useParams } from "react-router";
import { Assignment, Enrollment, db } from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faFileImport,
  faFilter,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export function Grades() {
  const params = useParams();
  const courseId = parseInt(params.courseId ? params.courseId : "");
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  return (
    <>
      <TopBar />
      <GradeTable assignments={assignments} enrollments={enrollments} />
    </>
  );
}

function TopBar() {
  return (
    <>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn wd-button me-2">
          <FontAwesomeIcon icon={faFileImport} className="me-1" />
          <span className="ms-1">Import</span>
        </button>
        <button type="button" className="btn dropdown-toggle wd-button me-2">
          <FontAwesomeIcon icon={faFileExport} className="me-1" />
          <span className="ms-1">Export</span>
        </button>
        <button type="button" className="btn wd-button">
          <FontAwesomeIcon icon={faGear} size="xl" />
        </button>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="studentNamesInput" className="form-label">
            <b>Student Names</b>
          </label>
        </div>

        <div className="col">
          <label htmlFor="assignmentNamesInput" className="form-label">
            <b>Assignment Names</b>
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            id="studentNamesInput"
            placeholder="Search Students"
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            id="assignmentNamesInput"
            placeholder="Search Assignments"
          />
        </div>
      </div>
      <button type="button" className="btn wd-button my-4">
        <FontAwesomeIcon icon={faFilter} className="me-1" />
        Apply Filters
      </button>
    </>
  );
}

function GradeTable({
  assignments,
  enrollments,
}: {
  assignments: Assignment[];
  enrollments: Enrollment[];
}) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="align-middle">
            <th scope="col">Student Name</th>
            {assignments.map((assignment) => (
              <td scope="col" className="text-center">
                <p className="my-0">{assignment.title}</p>
                <p className="my-0" style={{ fontSize: "0.75em" }}>
                  Out of 100
                </p>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {enrollments.map((enrollment) => {
            const student = db.users.find(
              (user) => user._id === enrollment.user
            );
            return (
              <tr>
                <td style={{ color: "red" }}>
                  {student?.firstName} {student?.lastName}
                </td>
                {assignments.map((assignment) => {
                  const grade = db.grades.find(
                    (grade) =>
                      grade.assignment === assignment._id &&
                      grade.student === enrollment.user
                  );
                  return <td className="text-center">{grade?.grade}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
