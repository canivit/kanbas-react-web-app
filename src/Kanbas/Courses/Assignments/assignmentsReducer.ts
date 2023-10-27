import { createSlice } from "@reduxjs/toolkit";
import { db } from "../../Database";

const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      const newAssignments = [
        ...state.assignments,
        { ...action.payload, _id: new Date().getTime() },
      ];
      state.assignments = newAssignments;
    },
    deleteAssignment: (state, action) => {
      const newAssignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
      state.assignments = newAssignments;
    },
    updateAssignment: (state, action) => {
      const newAssignments = state.assignments.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.assignments = newAssignments;
    },
  },
});

export const assignmentsReducer = assignmentsSlice.reducer;
export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
