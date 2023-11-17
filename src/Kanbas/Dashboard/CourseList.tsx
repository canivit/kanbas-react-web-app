import { Course } from "../client/course";
import { CourseCard } from "./CourseCard";

export function CourseList({
  courses,
  editCourseHandler,
  deleteCourseHandler,
}: {
  courses: Course[];
  editCourseHandler: (course: Course) => void;
  deleteCourseHandler: (courseId: number) => void;
}) {
  return (
    <div className="d-flex flex-row flex-wrap ps-2">
      {courses.map((course) => (
        <CourseCard
          course={course}
          editCourseHandler={editCourseHandler}
          deleteCourseHandler={deleteCourseHandler}
          key={course._id}
        />
      ))}
    </div>
  );
}
