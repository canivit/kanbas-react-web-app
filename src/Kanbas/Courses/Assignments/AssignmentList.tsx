import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEllipsisVertical,
  faPenToSquare,
  faPlus,
  faSortDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import * as client from "./../../client/assignment";
import { Assignment } from "./../../client/assignment";

export function AssignmentList({ assignments }: { assignments: Assignment[] }) {
  return (
    <ul className="list-group rounded-0">
      <li className="list-group-item list-group-item-secondary">
        <div className="d-flex flex-row align-items-center">
          <FontAwesomeIcon icon={faSortDown} className="pe-2" />
          <b className="flex-fill">Assignments</b>

          <button className="btn" type="button">
            <FontAwesomeIcon icon={faPlus} />
          </button>

          <button className="btn" type="button">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </li>
      {assignments.map((assignment) => (
        <AssignmentItem assignment={assignment} key={assignment._id} />
      ))}
    </ul>
  );
}

function AssignmentItem({ assignment }: { assignment: Assignment }) {
  return (
    <li className="list-group-item" style={{ borderLeft: "4px solid green" }}>
      <div className="d-flex flex-row align-items-center">
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="xl"
          className="wd-check-icon ps-3 me-4"
          style={{ color: "green" }}
        />
        <div className="flex-fill">
          <Link
            to={`${assignment._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <b>{assignment.title}</b>
          </Link>
        </div>
        <button className="btn" type="button">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
        </button>

        <DeleteButton assignmentId={assignment._id} />

        <button className="btn" type="button">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
    </li>
  );
}

function DeleteButton({ assignmentId }: { assignmentId: number }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const dispatch = useDispatch();

  async function confirmHandler() {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
    setModalVisibility(false);
  }

  function cancelHandler() {
    setModalVisibility(false);
  }

  return (
    <>
      <button
        className="btn"
        type="button"
        onClick={() => setModalVisibility(true)}
      >
        <FontAwesomeIcon icon={faTrashCan} style={{ color: "red" }} />
      </button>

      <Modal show={modalVisibility} onHide={cancelHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment?
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn wd-button wd-button-red"
            type="button"
            onClick={confirmHandler}
          >
            Yes
          </button>
          <button
            className="btn wd-button"
            type="button"
            onClick={cancelHandler}
          >
            No
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
