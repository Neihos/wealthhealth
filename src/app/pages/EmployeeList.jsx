import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EmployeeList() {
  const userlist = useSelector((state) => state.employees.list);

  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>

        {userlist.length === 0 && <p>No employees found.</p>}

        {userlist.length > 0 && (
          <div>
            {userlist.map((employee) => (
              <div key={employee.id}>
                {employee.firstName} {employee.lastName}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
