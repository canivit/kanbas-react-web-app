import { Course, db } from "../Database";
import { CourseForm, SubmitMode } from "./CourseForm";
import { useState } from "react";
import { CourseList } from "./CourseList";

export function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState(defaultCourse);
  const [submitMode, setSubmitMode] = useState<SubmitMode>("add");

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

  function cancelHandler() {
    setCourse(defaultCourse);
    setSubmitMode("add");
  }

  function submitHandler(course: Course, submitMode: SubmitMode) {
    switch (submitMode) {
      case "add":
        addCourse(course);
        setCourse(defaultCourse);
        setSubmitMode("add");
        break;
      case "update":
        updateCourse(course);
        setCourse(defaultCourse);
        setSubmitMode("add");
        break;
    }
  }

  function editCourseHandler(course: Course) {
    setCourse(course);
    setSubmitMode("update");
  }

  return (
    <div className="ps-4 pt-4">
      <TitleBar />
      <CourseForm
        course={course}
        submitHandler={submitHandler}
        submitMode={submitMode}
        onChangeHandler={setCourse}
        cancelHandler={cancelHandler}
      />
      <SubtitleBar numOfCourses={courses.length} />
      <CourseList
        courses={courses}
        editCourseHandler={editCourseHandler}
        deleteCourseHandler={deleteCourse}
      />
    </div>
  );
}

function TitleBar() {
  return (
    <div>
      <h2>Dashboard</h2>
      <hr />
    </div>
  );
}

function SubtitleBar({ numOfCourses }: { numOfCourses: number }) {
  return (
    <div className="mt-4 ps-2">
      <h5>Published Courses {`(${numOfCourses})`}</h5>
      <hr />
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
