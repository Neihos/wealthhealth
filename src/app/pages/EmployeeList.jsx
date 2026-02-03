import { useSelector } from "react-redux";
import "../../assets/styles/EmployeeList.scss";
import { useState } from "react";

export default function EmployeeList() {
  const userlist = useSelector((state) => state.employees.list);
  const [search, setSearch] = useState("");

  const filteredEmployees = userlist.filter((employee) => {
    const query = search.trim().toLowerCase();

    if (query.length < 2) {
      return true;
    }

    const firstName = employee.firstName?.toLowerCase() || "";
    const lastName = employee.lastName?.toLowerCase() || "";

    return firstName.startsWith(query) || lastName.startsWith(query);
  });

  return (
    <div id="employee-div" className="container">
      <input
        id="employee-searchBar"
        type="text"
        placeholder="Search by first or last name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

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
          {filteredEmployees.map((employee) => (
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
