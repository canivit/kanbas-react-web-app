import axios from "axios";
import { API_BASE, COURSES_URL } from "./course";

const MODULES_URL = `${API_BASE}/modules`;

export type Module = {
  _id: number;
  name: string;
  description: string;
  course: number;
};

export async function findModulesOfCourse(courseId: number): Promise<Module[]> {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
}

export async function createModule(module: Module): Promise<Module> {
  const response = await axios.post(
    `${COURSES_URL}/${module.course}/modules`,
    module
  );
  return response.data;
}

export async function deleteModule(moduleId: number): Promise<void> {
  await axios.delete(`${MODULES_URL}/${moduleId}`);
}

export async function updateModule(module: Module): Promise<Module> {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
}
