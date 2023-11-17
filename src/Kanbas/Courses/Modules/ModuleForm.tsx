import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { useParams } from "react-router";
import { setModule } from "./modulesReducer";
import { Module } from "../../client/module";

export function ModuleForm({
  submitMode,
  submitHandler,
  cancelHandler,
}: {
  submitMode: SubmitMode;
  submitHandler: (module: Module, submitMode: SubmitMode) => void;
  cancelHandler: () => void;
}) {
  const params = useParams();
  const courseId = parseInt(params.courseId ? params.courseId : "");
  const dispatch = useDispatch();
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );

  function onChangeHandler(module: Module) {
    dispatch(setModule({ ...module, course: courseId }));
  }

  return (
    <div className="mb-4">
      <label htmlFor="moduleNameInput" className="form-label">
        Module Name
      </label>
      <input
        type="text"
        className="form-control mb-2"
        id="moduleNameInput"
        value={module.name}
        onChange={(e) => onChangeHandler({ ...module, name: e.target.value })}
      />

      <label htmlFor="moduleDecriptionInput" className="form-label">
        Module Description
      </label>
      <textarea
        className="form-control mb-2"
        id="moduleDescriptionInput"
        value={module.description}
        rows={5}
        onChange={(e) =>
          onChangeHandler({ ...module, description: e.target.value })
        }
      />

      <div className="d-flex justify-content-end">
        {submitMode === "update" && (
          <button className="btn wd-button me-2" onClick={cancelHandler}>
            Cancel
          </button>
        )}
        <button
          className="btn wd-button"
          onClick={() => submitHandler(module, submitMode)}
        >
          {submitButtonText(submitMode)}
        </button>
      </div>
    </div>
  );
}

export type SubmitMode = "add" | "update";

function submitButtonText(submitMode: SubmitMode): string {
  switch (submitMode) {
    case "add":
      return "Add Module";
    case "update":
      return "Update Module";
  }
}
