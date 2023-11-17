import { Navigate, Route, Routes } from "react-router";
import { KanbasNavigation } from "./KanbasNavigation";
import { Dashboard } from "./Dashboard";
import { Courses } from "./Courses";
import "./index.css";
import { Course } from "./Database";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import * as client from "./client/course";

export function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState(defaultCourse);

  async function fetchCourses() {
    const allCourses = await client.getCourses();
    setCourses(allCourses);
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  async function addCourse(course: Course) {
    const newCourse = await client.createCourse(course);
    const newCourses = [...courses, newCourse];
    setCourses(newCourses);
  }

  async function updateCourse(course: Course) {
    const updatedCourse = await client.updateCourse(course);
    const newCourses = courses.map((c) =>
      c._id === updatedCourse._id ? updatedCourse : c
    );
    setCourses(newCourses);
  }

  async function deleteCourse(courseId: number) {
    await client.deleteCourse(courseId);
    const newCourses = courses.filter((c) => c._id !== courseId);
    setCourses(newCourses);
  }

  return (
    <Provider store={store}>
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
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
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
