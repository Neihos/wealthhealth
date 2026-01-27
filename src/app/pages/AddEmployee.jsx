import "../../assets/styles/AddEmployee.scss";
import { states } from "../../data/states";

export default function AddEmployee() {
  return (
    <div className="addEmployee">
      <form action="#" id="create-employee">
        <h2>Enter the new employee’s information</h2>
        <div className="create-employee-container">
          <div className="create-employee-container__infos">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input id="date-of-birth" type="date" />

            <label htmlFor="start-date">Start Date</label>
            <input id="start-date" type="date" />

            <label htmlFor="department">Department</label>
            <select name="department" id="department">
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>

          <fieldset className="create-employee-container__address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>
        </div>
      </form>
    </div>
  );
}
