import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modules } from "../Modules";
import {
  faBan,
  faBell,
  faBullhorn,
  faBullseye,
  faChartSimple,
  faCircleCheck,
  faFileImport,
} from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <div className="row pe-5">
      <div className="col-8">
        <Modules />
      </div>
      <div className="col-1"></div>
      <div className="col-3">
        <Status />
      </div>
    </div>
  );
}

function Status() {
  return (
    <>
      <StatusButtons />
      <Todo />
      <ComingUp />
    </>
  );
}

function StatusButtons() {
  return (
    <>
      <h5>Course Status</h5>
      <hr />
      <div className="d-grid">
        <div className="btn-group">
          <button type="button" className="btn wd-button">
            <FontAwesomeIcon icon={faBan} className="me-1" />
            Unpublish
          </button>
          <button type="button" className="btn wd-button wd-button-green">
            <FontAwesomeIcon icon={faCircleCheck} className="me-1" />
            Published
          </button>
        </div>
      </div>

      <div className="d-grid gap-2 mt-4">
        <button type="button" className="btn wd-button">
          <FontAwesomeIcon icon={faFileImport} className="me-1" />
          Import Existing Content
        </button>

        <button type="button" className="btn wd-button">
          <FontAwesomeIcon icon={faFileImport} className="me-1" />
          Import From Commons
        </button>

        <button type="button" className="btn wd-button">
          <FontAwesomeIcon icon={faBullseye} className="me-1" />
          Choose Homepage
        </button>

        <button type="button" className="btn wd-button">
          <FontAwesomeIcon icon={faChartSimple} className="me-1" />
          View Course Stream
        </button>

        <button type="button" className="btn wd-button">
          <FontAwesomeIcon icon={faBullhorn} className="me-1" />
          New Announcement
        </button>

        <button type="button" className="btn wd-button">
          <FontAwesomeIcon icon={faChartSimple} className="me-1" />
          New Analytics
        </button>

        <button type="button" className="btn wd-button">
          <FontAwesomeIcon icon={faBell} className="me-1" />
          View Course Notifications
        </button>
      </div>
    </>
  );
}

function Todo() {
  return (
    <>
      <h5 className="mt-4">To Do</h5>
      <hr />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a className="wd-link" href="#">
            A1 - HTML
          </a>
          <button className="float-end btn" type="button">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li className="list-group-item">
          <a className="wd-link" href="#">
            A2 - CSS
          </a>
          <button className="float-end btn" type="button">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>
    </>
  );
}

function ComingUp() {
  return (
    <>
      <h5 className="mt-4">Coming Up</h5>
      <hr />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a className="wd-link" href="#">
            <i className="fa-solid fa-calendar-days me-2"></i>
            Quiz 1
          </a>
        </li>
        <li className="list-group-item">
          <a className="wd-link" href="#">
            <i className="fa-solid fa-calendar-days me-2"></i>
            Lecture 5
          </a>
        </li>
      </ul>
    </>
  );
}
