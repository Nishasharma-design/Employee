import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import classes from './EmployeeList.module.scss';
import { Employee, removeEmployee } from "../../redux/employeeSlice";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../../api/employeeApi";


const EmployeeList = () => {

  const employeesFromStore = useSelector((state: RootState) => state.employee.employees);

    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch employees from the API using React Query
  const { data: employeesFromApi = [], error, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  // Use the fetched data from the API only if Redux store is empty (can also use local state logic if needed)
  const employees = employeesFromStore.length > 0 ? employeesFromStore : employeesFromApi;

    const handleRemove = (employeeId: number) => {
      dispatch(removeEmployee(employeeId));
    };

    const handleEdit = (employeeId: number) => {
      navigate(`/employees/${employeeId}`);
    };

    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error loading employees</p>;
    }

    return (
      <div className={classes.employee_list}>
        <h1>Employee List</h1>
        <p className={classes.message}>Please click on 'Edit' to find more details of each employee.</p>
       
       <button className={classes.add_button} onClick={() => navigate('/add-employee')}>Add Employee</button>

        <ul>
          {employees.map((employee: Employee) => (
            <li key={employee.id}>
              {employee.firstName} {employee.lastName} - {employee.email}
              <button className={classes.edit_button} onClick={() => handleEdit(employee.id)}>Edit</button>
              <button className={classes.edit_button} onClick={() => handleRemove(employee.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );

};

export default EmployeeList;

