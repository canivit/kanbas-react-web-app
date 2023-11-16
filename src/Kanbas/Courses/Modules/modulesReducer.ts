import { createSlice } from "@reduxjs/toolkit";
import { Module } from "../../Database";

const initialState: {
  modules: Module[];
  module: Module;
} = {
  modules: [defaultModule()],
  module: defaultModule(),
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action) => {
      const newModules = [
        ...state.modules,
        { ...action.payload, _id: new Date().getTime() },
      ];
      state.modules = newModules;
    },
    deleteModule: (state, action) => {
      const newModules = state.modules.filter(
        (module) => module._id !== action.payload
      );
      state.modules = newModules;
    },
    updateModule: (state, action) => {
      const newModules = state.modules.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.modules = newModules;
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
    setModules: (state, action) => {
      state.modules = action.payload;
    },
  },
});

export const modulesReducer = modulesSlice.reducer;
export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;

export function defaultModule(): Module {
  return {
    _id: 0,
    name: "",
    description: "",
    course: 0,
  };
}