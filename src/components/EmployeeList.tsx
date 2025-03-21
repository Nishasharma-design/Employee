import React, { useEffect, useState } from 'react';

import classes from "./EmployeeList.module.scss";

type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  joiningDate: string;
}

const EmployeeList = () => {

    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchEmployees = async () => {
        try {
          const response = await fetch('http://localhost:8080/employees');
    
          if (!response.ok) {
            throw new Error("Failed to fetch employees");
          }
    
          const data = await response.json();
          setEmployees(data);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setIsLoading(false);
        }
      };
    
      fetchEmployees();
    }, []);
    
        

    
    return (
      <div className={classes.employee_list}>
        <h2>Employee List</h2>
  
        {isLoading && <p>Loading employees...</p>}
        {error && <p className={classes.error}>{error}</p>}
  
        {!isLoading && !error && employees.length === 0 && (
          <p>No employees found.</p>
        )}
  
        {!isLoading && !error && employees.length > 0 && (
          <ul>
            {employees.map((employee) => (
              <li key={employee.id}>
                <strong>{employee.firstName} {employee.lastName}</strong>
                <br />
                <span>Email: {employee.email}</span>
                <br />
                <span>Department: {employee.department}</span>
                <br />
                <span>Joining Date: {new Date(employee.joiningDate).toDateString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default EmployeeList;