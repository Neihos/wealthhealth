const STORAGE_KEY = "hrnet_employees";

export function loadEmployeesFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function saveEmployeesToStorage(employeesList) {
  try {
    const raw = JSON.stringify(employeesList);
    localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    // Can't save in localStorage
  }
}
