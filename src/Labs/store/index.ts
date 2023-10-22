import { configureStore } from "@reduxjs/toolkit";
import { helloReducer } from "../a4/ReduxExamples/HelloRedux/helloReducer";
import { counterReducer } from "../a4/ReduxExamples/CounterRedux/counterReducer";
import { addReducer } from "../a4/ReduxExamples/AddRedux/addReducer";
import { todosReducer } from "../a4/ReduxExamples/todos/todosReducer";

export const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});

export type LabState = ReturnType<typeof store.getState>;
