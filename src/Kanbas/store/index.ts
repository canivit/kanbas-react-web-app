import { configureStore } from "@reduxjs/toolkit";
import { modulesReducer } from "../Courses/Modules/modulesReducer";

export const store = configureStore({
  reducer: {
    modulesReducer,
  },
});

export type KanbasState = ReturnType<typeof store.getState>;
