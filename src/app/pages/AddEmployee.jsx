import { Link } from "react-router-dom";

export default function AddEmployee() {
  
  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
        <Link to="/employees">View Current Employees</Link>
      </div>
    </>
  );
}
