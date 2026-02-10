import "../../assets/styles/AddEmployee.scss";
import { states } from "../../data/states";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeesSlice";
import { Modal } from "react-simple-modal";

export default function AddEmployee() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastEmployee, setLastEmployee] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      id: crypto.randomUUID(),
      ...formData,
    };

    dispatch(addEmployee(employee));

    setLastEmployee(employee);
    setIsModalOpen(true);
    setFormData({
      firstName: "",
      lastName: "",
      birthDate: "",
      startDate: "",
      department: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };


  return (
    <div className="addEmployee">
      <form id="create-employee" onSubmit={handleSubmit}>
        <h2>Enter the new employee’s information</h2>
        <div className="create-employee-container">
          <div className="create-employee-container__infos">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />

            <label htmlFor="birthDate">Date of Birth</label>
            <input
              id="birthDate"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />

            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />

            <label htmlFor="department">Department</label>
            <select
              name="department"
              id="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a department
              </option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Legal">Legal</option>
            </select>
          </div>

          <fieldset className="create-employee-container__address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a state
              </option>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              type="text"
              name="zipCode"
              inputMode="numeric"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </fieldset>
        </div>

        <button type="submit" className="buttonAddEmployee">
          Save
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Employee created"
      >
        {lastEmployee && (
          <p>
            The employee <span>{lastEmployee.firstName} {lastEmployee.lastName}</span> has
            been successfully created.
          </p>
        )}
      </Modal>
      
    </div>
  );
}
