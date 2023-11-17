import axios from "axios";
import { Course } from "../Database";

export const COURSES_URL = "http://localhost:4000/api/courses";

export async function getCourses(): Promise<Course[]> {
  const response = await axios.get(COURSES_URL);
  return response.data;
}

export async function createCourse(course: Course): Promise<Course> {
  const response = await axios.post(`${COURSES_URL}`, course);
  return response.data;
}

export async function updateCourse(course: Course): Promise<Course> {
  const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
  return response.data;
}

export async function deleteCourse(courseId: number): Promise<void> {
  await axios.delete(`${COURSES_URL}/${courseId}`);
}

export async function getCourseById(courseId: number): Promise<Course> {
  const response = await axios.get(`${COURSES_URL}/${courseId}`);
  return response.data;
}
