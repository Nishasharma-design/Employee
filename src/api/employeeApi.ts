import axios from "axios";
import { Employee } from "../redux/employeeSlice"; 

export const fetchEmployees = async (filter: string): Promise<Employee[]> => {
  const url = filter
    ? `http://localhost:8080/employees?contractType=${filter}`
    : "http://localhost:8080/employees";

  const response = await axios.get<Employee[]>(url);
  return response.data;
};


export const addEmployeeApi = async (newEmployee: Employee): Promise<Employee> => {
  const response = await axios.post("http://localhost:8080/employees", newEmployee);
  return response.data;
};


export const updateEmployeeApi = async (updatedEmployee: Employee): Promise<Employee> => {
  const response = await axios.put(
    `http://localhost:8080/employees/${updatedEmployee.id}`,
    updatedEmployee
  );
  return response.data;
};


export const removeEmployeeApi = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:8080/employees/${id}`);
};
