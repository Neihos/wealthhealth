import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./store/employeesSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});