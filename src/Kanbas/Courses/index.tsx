import { useParams } from "react-router";
import { db } from "../Database";
import { parse } from "path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Courses() {
  const params = useParams();
  const courseId = parseInt(params.courseId ? params.courseId : "");
  const course = db.courses.find((course) => course.id === courseId);
  const title = course
    ? `${course.name} ${course.description}`
    : "Invalid Course Id";

  return (
    <div className="flex-fill ps-4 pt-4">
      <h3 style={{ color: "red" }}>
        <FontAwesomeIcon icon={faBars} className="me-4" />
        {title}
      </h3>
      <hr />
    </div>
  );
}
