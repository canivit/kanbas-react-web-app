import { Navigate, Route, Routes, useParams } from "react-router";
import { db } from "../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CourseNavigation, courseNavigationItems } from "./CourseNavigation";
import { Modules } from "./Modules";
import { Home } from "./Home";
import { Assignments } from "./Assignments";
import { AssignmentEditor } from "./Assignments/AssignmentEditor";

export function Courses() {
  const params = useParams();
  const courseId = parseInt(params.courseId ? params.courseId : "");
  const course = db.courses.find((course) => course._id === courseId);
  const title = course
    ? `${course.number} ${course.name}`
    : "Invalid Course Id";

  return (
    <div className="flex-fill ps-4 pt-4">
      <h3 style={{ color: "red" }}>
        <FontAwesomeIcon icon={faBars} className="me-4" />
        {title}
        <FontAwesomeIcon icon={faChevronRight} className="mx-3" />
        <CourseNavigationRoutes />
      </h3>
      <hr />
      <div className="row">
        <div className="col-1">
          <CourseNavigation />
        </div>
        <div className="col-1"></div>
        <Routes>
          <Route
            path="Modules"
            element={
              <div className="col-8">
                <Modules />
              </div>
            }
          />
          <Route
            path="Home"
            element={
              <div className="col">
                <Home />
              </div>
            }
          />
          <Route
            path="Assignments"
            element={
              <div className="col-8">
                <Assignments />
              </div>
            }
          />
          <Route
            path="Assignments/:assignmentId"
            element={
              <div className="col-8">
                <AssignmentEditor />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function CourseNavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="Home" />} />
      {courseNavigationItems.map((item) => (
        <Route
          key={item.text}
          path={item.route}
          element={<span style={{ color: "black" }}>{item.text}</span>}
        />
      ))}
    </Routes>
  );
}
