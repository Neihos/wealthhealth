import { Routes, Route } from "react-router-dom";
import AddEmployee from "../pages/AddEmployee";
import EmployeeList from "../pages/EmployeeList";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AddEmployee />} />
      <Route path="/employees" element={<EmployeeList />} />
    </Routes>
  );
}
