import { useSelector } from "react-redux";
import "../../assets/styles/EmployeeList.scss";
import { useState } from "react";
import FilterButton from "../components/employeeList/FilterButton";
import TableTh from "../components/employeeList/TableTh";

export default function EmployeeList() {
  const userlist = useSelector((state) => state.employees.list);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;
  const startIndex = (currentPage - 1) * PAGE_SIZE;

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
    setCurrentPage(1);

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

  // Make pagination
  const pagedEmployees = sortedEmployees.slice(
    startIndex,
    startIndex + PAGE_SIZE,
  );

  const totalPages = Math.ceil(sortedEmployees.length / PAGE_SIZE);

  return (
    <div id="employee-div" className="container">
      <div className="searchButton">
        <span>Sort by :</span>

        <FilterButton
          label="Last Name"
          sortKeyName="lastName"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
        <FilterButton
          label="First Name"
          sortKeyName="firstName"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
        <FilterButton
          label="Start Date"
          sortKeyName="startDate"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
        <FilterButton
          label="Department"
          sortKeyName="department"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
        <FilterButton
          label="Date Of Birth"
          sortKeyName="birthDate"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
        <FilterButton
          label="Street"
          sortKeyName="street"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
        <FilterButton
          label="City"
          sortKeyName="city"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
        <FilterButton
          label="State"
          sortKeyName="state"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
        <FilterButton
          label="Zip Code"
          sortKeyName="zipCode"
          activeSortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
      </div>

      <div className="tableContainer">
        <input
          id="employee-searchBar"
          type="text"
          placeholder="Search by first or last name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <table className="employees-table">
          <caption>Current Employees</caption>

          <thead>
            <tr>
              <TableTh
                label="Last Name"
                sortKeyName="lastName"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
              <TableTh
                label="First Name"
                sortKeyName="firstName"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
              <TableTh
                label="Start Date"
                sortKeyName="startDate"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
              <TableTh
                label="Departement"
                sortKeyName="department"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
              <TableTh
                label="Date Of Birth"
                sortKeyName="birthDate"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
              <TableTh
                label="Street"
                sortKeyName="street"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
              <TableTh
                label="City"
                sortKeyName="city"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
              <TableTh
                label="State"
                sortKeyName="state"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
              <TableTh
                label="Zip Code"
                sortKeyName="zipCode"
                activeSortKey={sortKey}
                sortDir={sortDir}
                onSort={handleSort}
              />
            </tr>
          </thead>

          <tbody>
            {pagedEmployees.map((employee) => (
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

        <div className="pagination">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>
            Page {currentPage} / {totalPages || 1}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
