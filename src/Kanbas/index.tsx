import { Navigate, Route, Routes } from "react-router";
import { KanbasNavigation } from "./KanbasNavigation";
import { Dashboard } from "./Dashboard";
import { Courses } from "./Courses";
import "./index.css";
import { Course, db } from "./Database";
import { useState } from "react";

export function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState(defaultCourse);

  function addCourse(course: Course) {
    const newCourses = [...courses, course];
    setCourses(newCourses);
  }

  function updateCourse(course: Course) {
    const newCourses = courses.map((c) => (c._id === course._id ? course : c));
    setCourses(newCourses);
  }

  function deleteCourse(courseId: number) {
    const newCourses = courses.filter((c) => c._id !== courseId);
    setCourses(newCourses);
  }

  return (
    <div className="d-flex mt-4">
      <KanbasNavigation />
      <div className="flex-fill">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addCourse={addCourse}
                updateCourse={updateCourse}
                deleteCourse={deleteCourse}
                defaultCourse={defaultCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
        </Routes>
      </div>
    </div>
  );
}

function defaultCourse(): Course {
  const today = new Date().toISOString().split("T")[0];

  return {
    _id: new Date().getTime(),
    name: "",
    number: "",
    startDate: today,
    endDate: today,
  };
}
