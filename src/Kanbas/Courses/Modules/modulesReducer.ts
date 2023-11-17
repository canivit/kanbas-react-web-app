import { createSlice } from "@reduxjs/toolkit";
import { Module } from "../../client/module";

const initialState: {
  modules: Module[];
  module: Module;
} = {
  modules: [],
  module: defaultModule(),
};

type AddAction = {
  payload: Module;
};

type DeleteAction = {
  payload: number;
};

type UpdateAction = AddAction;

type SetSingleAction = {
  payload: Module;
};

type SetMultipleAction = {
  payload: Module[];
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, action: AddAction) => {
      const newModules = [...state.modules, action.payload];
      state.modules = newModules;
    },
    deleteModule: (state, action: DeleteAction) => {
      const newModules = state.modules.filter(
        (module) => module._id !== action.payload
      );
      state.modules = newModules;
    },
    updateModule: (state, action: UpdateAction) => {
      const newModules = state.modules.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      state.modules = newModules;
    },
    setModule: (state, action: SetSingleAction) => {
      state.module = action.payload;
    },
    setModules: (state, action: SetMultipleAction) => {
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
