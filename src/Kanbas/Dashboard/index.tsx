import { CourseCard } from "./CourseCard";
import { db } from "../Database";

export function Dashboard() {
  return (
    <div className="ps-4">
      <TitleBar />
      <SubtitleBar numOfCourses={db.courses.length} />
      <CourseList />
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

function SubtitleBar({ numOfCourses = 0 }) {
  return (
    <div className="mt-4 ps-2">
      <h5>Published Courses {`(${numOfCourses})`}</h5>
      <hr />
    </div>
  );
}

function CourseList() {
  return (
    <div className="d-flex flex-row flex-wrap ps-2">
      {db.courses.map((course) => (
        <CourseCard {...course} key={course.id}/>
      ))}
    </div>
  );
}
