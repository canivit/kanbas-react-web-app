import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModuleList } from "./ModuleList";
import {
  faCircleCheck,
  faEllipsisVertical,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export function Modules() {
  return (
    <div>
      <TitleBar />
      <ModuleList />
    </div>
  );
}

function TitleBar() {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn wd-button">
          Collapse All
        </button>
        <button type="submit" className="btn wd-button ms-2">
          View Progess
        </button>
        <button
          className="btn dropdown-toggle wd-button ms-2"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="me-1"
            style={{ color: "green" }}
          />
          Publish All
        </button>
        <button type="submit" className="btn wd-button-red ms-2">
          <FontAwesomeIcon icon={faPlus} className="me-1" />
          Module
        </button>
        <button type="submit" className="btn wd-button ms-2">
          <FontAwesomeIcon icon={faEllipsisVertical}/>
        </button>
      </div>
      <hr />
    </div>
  );
}
