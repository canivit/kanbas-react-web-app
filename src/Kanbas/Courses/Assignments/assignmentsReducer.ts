import { createSlice } from "@reduxjs/toolkit";
import { Assignment } from "../../client/assignment";

const initialState: {
  assignments: Assignment[];
} = {
  assignments: [],
};

type AddAction = {
  payload: Assignment;
};

type DeleteAction = {
  payload: number;
};

type UpdateAction = AddAction;

type SetAction = {
  payload: Assignment[];
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: AddAction) => {
      const newAssignments = [
        ...state.assignments,
        { ...action.payload, _id: new Date().getTime() },
      ];
      state.assignments = newAssignments;
    },
    deleteAssignment: (state, action: DeleteAction) => {
      const newAssignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
      state.assignments = newAssignments;
    },
    updateAssignment: (state, action: UpdateAction) => {
      const newAssignments = state.assignments.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.assignments = newAssignments;
    },
    setAssignments: (state, action: SetAction) => {
      state.assignments = action.payload;
    },
  },
});

export const assignmentsReducer = assignmentsSlice.reducer;
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignments,
} = assignmentsSlice.actions;
