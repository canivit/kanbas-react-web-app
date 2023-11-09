import { Navigate, Route, Routes, useParams } from "react-router";
import { Course } from "../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CourseNavigation, courseNavigationItems } from "./CourseNavigation";
import { Modules } from "./Modules";
import { Home } from "./Home";
import { Assignments } from "./Assignments";
import { Grades } from "./Grades";
import { UpdateAssignment } from "./Assignments/UpdateAssignment";
import { CreateAssignment } from "./Assignments/CreateAssignment";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../api";

export function Courses() {
  const params = useParams();
  const courseId = parseInt(params.courseId ? params.courseId : "");
  const [course, setCourse] = useState<Course | false>(false);

  async function fetchCourse() {
    try {
      const response = await axios.get(`${API}/courses/${courseId}`);
      setCourse(response.data);
    } catch (err: unknown) {
      setCourse(false);
    }
  }

  useEffect(() => {
    fetchCourse();
  }, [courseId]);

  if (!course) {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Course not found!
      </div>
    );
  }

  return (
    <div className="flex-fill ps-4 pt-4">
      <h3 style={{ color: "red" }}>
        <FontAwesomeIcon icon={faBars} className="me-4" />
        {`${course.number} ${course.name}`}
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
                <UpdateAssignment courseId={courseId} />
              </div>
            }
          />
          <Route
            path="CreateAssignment"
            element={
              <div className="col-8">
                <CreateAssignment courseId={courseId} />
              </div>
            }
          />
          <Route
            path="Grades"
            element={
              <div className="col-8">
                <Grades />
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
