import { Course } from "../Database";

export function CourseForm({
  course,
  submitHandler,
  submitMode,
  onChangeHandler,
  cancelHandler,
}: {
  course: Course;
  submitHandler: (course: Course, submitMode: SubmitMode) => void;
  submitMode: SubmitMode;
  onChangeHandler: (course: Course) => void;
  cancelHandler: () => void;
}) {
  return (
    <div>
      <div className="row mx-0 mb-2">
        <div className="col">
          <label htmlFor="courseNameInput" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="courseNameInput"
            value={course.name}
            onChange={(e) =>
              onChangeHandler({ ...course, name: e.target.value })
            }
          />
        </div>

        <div className="col">
          <label htmlFor="courseNumberInput" className="form-label">
            Course Number
          </label>
          <input
            type="text"
            className="form-control"
            id="courseNumberInput"
            value={course.number}
            onChange={(e) =>
              onChangeHandler({ ...course, number: e.target.value })
            }
          />
        </div>
      </div>
      <div className="row mx-0 mb-3">
        <div className="col">
          <label htmlFor="startDateInput" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="startDateInput"
            value={course.startDate}
            onChange={(e) =>
              onChangeHandler({ ...course, startDate: e.target.value })
            }
          />
        </div>

        <div className="col">
          <label htmlFor="endDateInput" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-control"
            id="endDateInput"
            value={course.endDate}
            onChange={(e) =>
              onChangeHandler({ ...course, endDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row mx-0">
        <div className="col">
          <div className="float-end">
            {submitMode === "update" && (
              <button className="btn wd-button me-2" onClick={cancelHandler}>
                Cancel
              </button>
            )}

            <button
              className="btn wd-button"
              onClick={() => {
                submitHandler(course, submitMode);
              }}
            >
              {submitButtonText(submitMode)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export type SubmitMode = "add" | "update";

function submitButtonText(submitMode: SubmitMode) {
  switch (submitMode) {
    case "add":
      return "Add New Course";
    case "update":
      return "Update Course";
  }
}
