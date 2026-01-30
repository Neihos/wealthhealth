import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./store/employeesSlice";
import {
  loadEmployeesFromStorage,
  saveEmployeesToStorage,
} from "./store/storage";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  preloadedState: {
    employees: {
      list: loadEmployeesFromStorage(),
    },
  },
});

store.subscribe(() => {
  const employeesList = store.getState().employees.list;
  saveEmployeesToStorage(employeesList);
});
