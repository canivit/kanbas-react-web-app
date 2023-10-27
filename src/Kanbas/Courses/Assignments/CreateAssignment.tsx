import { useNavigate } from "react-router";
import { addAssignment } from "./assignmentsReducer";
import { useDispatch } from "react-redux";
import { AssignmentEditor } from "./AssignmentEditor";
import { Assignment } from "../../Database";

export function CreateAssignment({ courseId }: { courseId: number }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function navigateBack() {
    navigate(`/Kanbas/courses/${courseId}/assignments`);
  }

  function onSaveHandler(assignment: Assignment) {
    dispatch(addAssignment(assignment));
    navigateBack();
  }

  const assignment: Assignment = {
    _id: new Date().getTime(),
    title: "",
    course: courseId,
  };

  return (
    <AssignmentEditor
      assignment={assignment}
      onSaveHandler={onSaveHandler}
      onCancelHandler={navigateBack}
    />
  );
}
