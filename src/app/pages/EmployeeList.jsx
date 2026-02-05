import { useSelector } from "react-redux";
import "../../assets/styles/EmployeeList.scss";
import { useState } from "react";

export default function EmployeeList() {
  const userlist = useSelector((state) => state.employees.list);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");

  // Define sort type for each sortable column
  const sortTypeByKey = {
    lastName: "text",
    firstName: "text",
    department: "text",
    street: "text",
    city: "text",
    state: "text",
    zipCode: "number",
    birthDate: "date",
    startDate: "date",
  };

  // Filter employees by first or last name (min 2 characters)
  const filteredEmployees = userlist.filter((employee) => {
    const query = search.trim().toLowerCase();

    if (query.length < 2) {
      return true;
    }

    const firstName = employee.firstName?.toLowerCase() || "";
    const lastName = employee.lastName?.toLowerCase() || "";

    return firstName.startsWith(query) || lastName.startsWith(query);
  });

  // Handle column sorting (toggle asc / desc)
  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  // Compare two text values
  const compareText = (a, b) => {
    const av = (a ?? "").toString().toLowerCase();
    const bv = (b ?? "").toString().toLowerCase();
    return av.localeCompare(bv);
  };

  // Compare two numeric values
  const compareNumber = (a, b) => {
    const av = Number(a);
    const bv = Number(b);
    if (Number.isNaN(av) && Number.isNaN(bv)) return 0;
    if (Number.isNaN(av)) return 1;
    if (Number.isNaN(bv)) return -1;
    return av - bv;
  };

  // Compare two dates
  const compareDate = (a, b) => {
    const av = Date.parse(a);
    const bv = Date.parse(b);
    if (Number.isNaN(av) && Number.isNaN(bv)) return 0;
    if (Number.isNaN(av)) return 1;
    if (Number.isNaN(bv)) return -1;
    return av - bv;
  };

  // Sort employees based on selected column and direction
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortKey) return 0;

    const type = sortTypeByKey[sortKey] ?? "text";

    let result = 0;
    if (type === "number") result = compareNumber(a[sortKey], b[sortKey]);
    else if (type === "date") result = compareDate(a[sortKey], b[sortKey]);
    else result = compareText(a[sortKey], b[sortKey]);

    return sortDir === "asc" ? result : -result;
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

      <div className="searchButton">
        <span>Sort by :</span>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "lastName" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("lastName")}
        >
          Last Name
        </button>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "firstName" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("firstName")}
        >
          First Name
        </button>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "startDate" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("startDate")}
        >
          Start Date
        </button>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "department" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("department")}
        >
          Department
        </button>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "birthDate" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("birthDate")}
        >
          Date Of Birth
        </button>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "street" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("street")}
        >
          Street
        </button>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "city" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("city")}
        >
          City
        </button>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "state" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("state")}
        >
          State
        </button>
        <button
          type="button"
          className={
            "searchButton__button" +
            (sortKey === "zipCode" ? ` is-active ${sortDir}` : "")
          }
          onClick={() => handleSort("zipCode")}
        >
          Zip Code
        </button>
      </div>

      <table className="employees-table">
        <caption>Current Employees</caption>

        <thead>
          <tr>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "lastName"
                  ? ` is-active ${sortDir}`
                  : " not-active")
              }
              onClick={() => handleSort("lastName")}
            >
              Last Name
            </th>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "firstName"
                  ? ` is-active ${sortDir}`
                  : " not-active")
              }
              onClick={() => handleSort("firstName")}
            >
              First Name
            </th>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "startDate"
                  ? ` is-active ${sortDir}`
                  : " not-active")
              }
              onClick={() => handleSort("startDate")}
            >
              Start Date
            </th>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "department"
                  ? ` is-active ${sortDir}`
                  : " not-active")
              }
              onClick={() => handleSort("department")}
            >
              Department
            </th>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "birthDate"
                  ? ` is-active ${sortDir}`
                  : " not-active")
              }
              onClick={() => handleSort("birthDate")}
            >
              Date of Birth
            </th>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "street" ? ` is-active ${sortDir}` : " not-active")
              }
              onClick={() => handleSort("street")}
            >
              Street
            </th>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "city" ? ` is-active ${sortDir}` : " not-active")
              }
              onClick={() => handleSort("city")}
            >
              City
            </th>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "state" ? ` is-active ${sortDir}` : " not-active")
              }
              onClick={() => handleSort("state")}
            >
              State
            </th>
            <th
              scope="col"
              className={
                "listName" +
                (sortKey === "zipCode"
                  ? ` is-active ${sortDir}`
                  : " not-active")
              }
              onClick={() => handleSort("zipCode")}
            >
              Zip Code
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedEmployees.map((employee) => (
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
