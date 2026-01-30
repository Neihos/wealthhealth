import { useSelector } from "react-redux";
import "../../assets/styles/EmployeeList.scss";

export default function EmployeeList() {
  const userlist = useSelector((state) => state.employees.list);

  return (
    <div id="employee-div" className="container">
      <table className="employees-table">
        <caption>Current Employees</caption>

        <thead>
          <tr>
            <th scope="col">Last Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Start Date</th>
            <th scope="col">Department</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Street</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip Code</th>
          </tr>
        </thead>

        <tbody>
          {userlist.map((employee) => (
            <tr key={employee.id}>
              <td data-title="Last Name">{employee.lastName}</td>
              <td data-title="First Name">{employee.firstName}</td>
              <td data-title="Start Date">{employee.startDate}</td>
              <td data-title="Department">{employee.department}</td>
              <td data-title="Date of Birth">{employee.birthDate}</td>
              <td data-title="Street">{employee.street}</td>
              <td data-title="City">{employee.city}</td>
              <td data-title="State">{employee.state}</td>
              <td data-title="Zip Code">{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
