import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { KanbasState } from "../../store";
import { AssignmentEditor } from "./AssignmentEditor";
import { Assignment } from "../../Database";
import { updateAssignment } from "./assignmentsReducer";
import * as client from "./../../client/assignment";

export function UpdateAssignment({ courseId }: { courseId: number }) {
  const dispatch = useDispatch();
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments
  ).find((a) => a._id === parseInt(assignmentId ? assignmentId : ""));

  if (assignment === undefined) {
    return <h2>Assignment not found</h2>;
  }

  function navigateBack() {
    navigate(`/Kanbas/courses/${courseId}/assignments`);
  }

  async function onSaveHandler(assignment: Assignment) {
    const updatedAssignment = await client.updateAssignment(assignment);
    dispatch(updateAssignment(updatedAssignment));
    navigateBack();
  }

  return (
    <AssignmentEditor
      assignment={assignment}
      onSaveHandler={onSaveHandler}
      onCancelHandler={navigateBack}
    />
  );
}
