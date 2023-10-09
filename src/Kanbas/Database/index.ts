import courses from "./courses.json";

export type Course = typeof courses[0];

export type Database = {
  courses: Course[];
};

const db: Database = {
  courses,
};

export { db };
