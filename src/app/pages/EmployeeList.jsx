import { Link } from "react-router-dom";

export default function EmployeeList() {
  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
