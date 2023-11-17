import { CourseForm, SubmitMode } from "./CourseForm";
import { useState } from "react";
import { CourseList } from "./CourseList";
import { Course } from "../client/course";

export function Dashboard({
  courses,
  course,
  setCourse,
  addCourse,
  updateCourse,
  deleteCourse,
  defaultCourse,
}: {
  courses: Course[];
  course: Course;
  setCourse: (course: Course | (() => Course)) => void;
  addCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
  deleteCourse: (courseId: number) => void;
  defaultCourse: () => Course;
}) {
  const [submitMode, setSubmitMode] = useState<SubmitMode>("add");

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
