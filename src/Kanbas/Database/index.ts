import courses from "./courses.json";
import modules from "./modules.json";

export type Course = typeof courses[0];
export type Module = typeof modules[0];

export type Database = {
  courses: Course[];
  modules: Module[];
};

const db: Database = {
  courses,
  modules,
};

export { db };
