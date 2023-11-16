import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModuleList } from "./ModuleList";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { ModuleForm, SubmitMode } from "./ModuleForm";
import { Module } from "../../Database";
import { useDispatch } from "react-redux";
import {
  addModule,
  defaultModule,
  setModule,
  updateModule,
} from "./modulesReducer";
import { useState } from "react";
import * as client from "../../client/module";

export function Modules() {
  const dispatch = useDispatch();
  const [submitMode, setSubmitMode] = useState<SubmitMode>("add");

  async function submitHandler(module: Module, submitMode: SubmitMode) {
    switch (submitMode) {
      case "add":
        const newModule = await client.createModule(module);
        dispatch(addModule(newModule));
        break;
      case "update":
        const updatedModule = await client.updateModule(module);
        dispatch(updateModule(updatedModule));
        break;
    }

    dispatch(setModule(defaultModule()));
    setSubmitMode("add");
  }

  function cancelHandler() {
    dispatch(setModule(defaultModule()));
    setSubmitMode("add");
  }

  function editModuleHandler(module: Module) {
    dispatch(setModule(module));
    setSubmitMode("update");
  }

  return (
    <div>
      <TitleBar />
      <ModuleForm
        submitMode={submitMode}
        submitHandler={submitHandler}
        cancelHandler={cancelHandler}
      />
      <ModuleList editModuleHandler={editModuleHandler} />
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
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
      <hr />
    </div>
  );
}
