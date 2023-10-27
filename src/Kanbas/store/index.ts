import { configureStore } from "@reduxjs/toolkit";
import { modulesReducer } from "../Courses/Modules/modulesReducer";
import { assignmentsReducer } from "../Courses/Assignments/assignmentsReducer";

export const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  },
});

export type KanbasState = ReturnType<typeof store.getState>;
