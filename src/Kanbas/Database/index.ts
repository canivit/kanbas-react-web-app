import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";

export type Course = (typeof courses)[0];
export type Module = (typeof modules)[0];
export type Assignment = (typeof assignments)[0];

export type Database = {
  courses: Course[];
  modules: Module[];
  assignments: Assignment[];
};

const db: Database = {
  courses,
  modules,
  assignments,
};

export { db };
