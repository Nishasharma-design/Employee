import axios from "axios";
import { Employee } from "../redux/employeeSlice"; // Import the Employee type

export const fetchEmployees = async () => {
    const response = await axios.get("http://localhost:8080/employees");
    return response.data; // assuming your API returns an array of employees
  };

// Add Employee
export const addEmployee = async (newEmployee: Employee): Promise<Employee> => {
  const response = await axios.post("http://localhost:8080/employees", newEmployee);
  return response.data;
};

// Update Employee
export const updateEmployee = async (updatedEmployee: Employee): Promise<Employee> => {
  const response = await axios.put(
    `http://localhost:8080/employees/${updatedEmployee.id}`,
    updatedEmployee
  );
  return response.data;
};

// Delete Employee
export const removeEmployee = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:8080/employees/${id}`);
};
