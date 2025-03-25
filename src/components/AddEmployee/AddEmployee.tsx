import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../redux/employeeSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEmployeeApi } from "../../api/employeeApi";
import { Employee } from "../../redux/employeeSlice";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  


  const addEmployeeMutation = useMutation({
    mutationFn: addEmployeeApi,
    onSuccess: (newEmployee) => {
      dispatch(addEmployee(newEmployee)); 
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      navigate("/"); 
    },
  });

  const onSubmit = (data: Employee) => {
    console.log("Submitting Employee Data:", data);
    addEmployeeMutation.mutate(data);
  };

  return (
    <EmployeeForm onSubmit={onSubmit} />
  )
}

export default AddEmployee;

