import axios from "axios";
import { Assignment } from "../Database";
import { COURSES_URL } from "./course";

const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";

export async function findAssignmentsOfCourse(
  courseId: number
): Promise<Assignment[]> {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
}

export async function createAssignment(
  assignment: Assignment
): Promise<Assignment> {
  const response = await axios.post(
    `${COURSES_URL}/${assignment.course}/assignments`,
    assignment
  );
  return response.data;
}

export async function deleteAssignment(assignmentId: number): Promise<void> {
  await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
}

export async function updateAssignment(
  assignment: Assignment
): Promise<Assignment> {
  const response = await axios.put(
    `${ASSIGNMENTS_URL}/${assignment._id}`,
    assignment
  );
  return response.data;
}
