import { useNavigate } from "react-router";
import { addAssignment } from "./assignmentsReducer";
import { useDispatch } from "react-redux";
import { AssignmentEditor } from "./AssignmentEditor";
import { Assignment } from "../../Database";
import * as client from "./../../client/assignment";

export function CreateAssignment({ courseId }: { courseId: number }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function navigateBack() {
    navigate(`/Kanbas/courses/${courseId}/assignments`);
  }

  async function onSaveHandler(assignment: Assignment) {
    const newAssignment = await client.createAssignment(assignment);
    dispatch(addAssignment(newAssignment));
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
