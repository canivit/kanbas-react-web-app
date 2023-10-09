import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Course } from "../Database";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./CourseCard.css";
import { Link } from "react-router-dom";

export function CourseCard(course: Course) {
  return (
    <div className="card wd-course-card">
      <div className="card-img-top wd-course-card-image"></div>
      <div className="card-body">
        <Link
          to={`/Kanbas/Courses/${course.id}`}
          className="text-decoration-none"
        >
          <h5 className="card-title">{`${course.name} ${course.description}`}</h5>
        </Link>
        <p className="card-text mb-0">{`Start: ${course.startDate}`}</p>
        <p className="card-text">{`End: ${course.endDate}`}</p>
        <FontAwesomeIcon icon={faPenToSquare} size="xl" />
      </div>
    </div>
  );
}
