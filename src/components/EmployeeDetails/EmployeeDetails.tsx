import { useDispatch, useSelector } from "react-redux";
import { addEmployee, updateEmployee, Employee } from "../../redux/employeeSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmployeeApi, updateEmployeeApi } from "../../api/employeeApi";

import EmployeeForm from "../EmployeeForm/EmployeeForm";

const EmployeeDetails = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const selectedEmployee = useSelector((state: RootState) => state.employee.selectedEmployee);
  
    // Mutations
    const addEmployeeMutation = useMutation({
      mutationFn: addEmployeeApi,
      onSuccess: (newEmployee) => {
        dispatch(addEmployee(newEmployee));
        queryClient.invalidateQueries({ queryKey: ["employees"] });
        navigate("/");
      },
    });
  
    const updateEmployeeMutation = useMutation({
      mutationFn: updateEmployeeApi,
      onSuccess: (updatedEmployee) => {
        dispatch(updateEmployee(updatedEmployee)); // this updates redux, ensuring UI updates
        queryClient.invalidateQueries({ queryKey: ["employees"] });
        navigate("/");
      },
    });
  
    const onSubmit = (data: Employee) => {
      if (selectedEmployee) {
        updateEmployeeMutation.mutate({ ...selectedEmployee, ...data }); // calls API to update employee in database
      } else {
        addEmployeeMutation.mutate(data);
      }
    };

   return (
    <EmployeeForm onSubmit={onSubmit} defaultValues={selectedEmployee} />
   );
};

export default EmployeeDetails;