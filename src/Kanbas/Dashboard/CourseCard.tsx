import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Course } from "../Database";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./CourseCard.css";
import { Link } from "react-router-dom";

export function CourseCard({
  course,
  editCourseHandler,
  deleteCourseHandler,
}: {
  course: Course;
  editCourseHandler: (course: Course) => void;
  deleteCourseHandler: (courseId: number) => void;
}) {
  return (
    <div className="card wd-course-card">
      <div className="card-img-top wd-course-card-image"></div>
      <div className="card-body">
        <Link
          to={`/Kanbas/Courses/${course._id}`}
          className="text-decoration-none"
        >
          <h5 className="card-title">{`${course.number} ${course.name}`}</h5>
        </Link>
        <p className="card-text mb-0">{`Start: ${course.startDate}`}</p>
        <p className="card-text">{`End: ${course.endDate}`}</p>
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="xl"
          onClick={() => editCourseHandler(course)}
          style={{ cursor: "pointer" }}
          className="me-4"
        />
        <FontAwesomeIcon
          icon={faTrashCan}
          size="xl"
          onClick={() => deleteCourseHandler(course._id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
