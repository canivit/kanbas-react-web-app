import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { deleteModule, setModules } from "./modulesReducer";
import { useEffect } from "react";
import * as client from "../../client/module";
import { Module } from "../../client/module";

export function ModuleList({
  editModuleHandler,
}: {
  editModuleHandler: (module: Module) => void;
}) {
  const params = useParams();
  const dispatch = useDispatch();
  const courseId = parseInt(params.courseId ? params.courseId : "");

  async function fetchModules() {
    const modules = await client.findModulesOfCourse(courseId);
    dispatch(setModules(modules));
  }

  useEffect(() => {
    fetchModules();
  }, [courseId]);

  const modules = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );

  async function deleteModuleHandler(moduleId: number) {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  }

  return (
    <ul className="list-group">
      {modules
        .filter((m) => m.course === courseId)
        .map((module) => (
          <li
            className="list-group-item list-group-item-secondary"
            key={module._id}
          >
            <div className="d-flex align-items-center">
              <div className="flex-fill">
                <h5>{module.name}</h5>
                <p className="mb-0">{module.description}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPen}
                  size="lg"
                  className="me-3"
                  onClick={() => editModuleHandler(module)}
                  style={{ cursor: "pointer" }}
                />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  size="lg"
                  onClick={() => deleteModuleHandler(module._id)}
                  style={{ cursor: "pointer", color: "red" }}
                />
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
