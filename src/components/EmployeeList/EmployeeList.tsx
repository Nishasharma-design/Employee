import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import classes from "./EmployeeList.module.scss";
import { removeEmployee, setEmployees, setSelectedEmployee } from "../../redux/employeeSlice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchEmployees, removeEmployeeApi } from "../../api/employeeApi";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { closeModal, openModal } from "../../redux/modalSlice";

const EmployeeList = () => {
  const employees = useSelector((state: RootState) => state.employee.employees);
  const modalState = useSelector((state: RootState) => state.modal);
  const queryClient = useQueryClient(); // forces refreshing data after any update, add or edit
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const { data, error, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  // this part is making sure we are in sync with redux store with the API calls
  useEffect(() => {
    if (data) {
      dispatch(setEmployees(data)); // useQuery stores employees only inside React Query's Cache
    } // but we also want to store employees inside Redux, so we can access them from other parts of the app
  }, [data, dispatch]);

 
  const removeEmployeeMutation = useMutation({
    mutationFn: removeEmployeeApi,
    onSuccess: (_, id) => {
      dispatch(removeEmployee(id)); 
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      dispatch(closeModal());
    },
  });

  const handleRemove = (id: number) => {
    removeEmployeeMutation.mutate(id); 
  };

  const handleAddEmployee = () => {
    navigate("/add"); 
  };

  const handleEdit = (id: number) => {
    const selectedEmployee = employees.find((emp) => emp.id === id);
    if (selectedEmployee) {
      dispatch(setSelectedEmployee(selectedEmployee));
      navigate(`/edit-employee/${id}`);
    }
  };
  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading employees</p>;

  return (
    <div className={classes.employee_list}>
      <h1>Employee List</h1>
      <p className={classes.message}>Please click on 'Edit' to find more details of each employee.</p>

      <button className={classes.add_button} onClick={handleAddEmployee}>
        Add Employee
      </button>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName} - {employee.email}
            <button className={classes.edit_button} onClick={() => handleEdit(employee.id)}>
              Edit
            </button>
            <button className={classes.remove_button} onClick={() => dispatch(openModal(employee.id))}>
              Remove
            </button>
            
            {modalState.employeeId !== null && (
  <DeleteConfirmationModal
    isOpen={modalState.isOpen}
    onClose={() => dispatch(closeModal())}
    onConfirm={handleRemove}
    id={modalState.employeeId} 
  />
)}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

