import { useParams } from "react-router";
import { db } from "../../Database";

export function ModuleList() {
  const params = useParams();
  const courseId = parseInt(params.courseId ? params.courseId : "");
  const modules = db.modules.filter((module) => module.course === courseId);

  return (
    <ul className="list-group">
      {modules.map((module) => (
        <li className="list-group-item list-group-item-secondary" key={module._id}>
          {`${module.name} - ${module.description}`}
        </li>
      ))}
    </ul>
  );
}
