import {  createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Employee {
   id: number;
   firstName: string;
   middleName: string;
   lastName: string;
   email: string;
   mobileNumber: string;
   residentialAddress: string;
   contractType: 'permanent' | 'contract';
   startDate: string;
   finishDate: string;
   fullTimeOrPartTime: 'Full-Time' | 'Part-Time';
   hoursPerWeek: number | "";
}

const initialState = {
   employees: [] as Employee[],  
   selectedEmployee: null as Employee | null,  
};


const employeeSlice = createSlice({
   name: "employee",
   initialState,  
   reducers: {
      setEmployees(state, action: PayloadAction<Employee[]>) {
         state.employees = action.payload;
       },
      addEmployee: (state, action: PayloadAction<Employee>) => {
         state.employees.push(action.payload);
      },
      removeEmployee: (state, action: PayloadAction<number>) => {
         state.employees = state.employees.filter(emp => emp.id !== action.payload);
      },
      // this reducer sets the selected employee in Redux when a user clicks edit button
      setSelectedEmployee: (state, action: PayloadAction<Employee | null>) => {
         state.selectedEmployee = action.payload;
      },
      updateEmployee: (state, action: PayloadAction<Employee>) => {
         const index = state.employees.findIndex(emp => emp.id === action.payload.id);
         if (index !== -1) {
            state.employees[index] = action.payload;
         }
      },
   },
   
});

export const {  setEmployees, addEmployee, removeEmployee, setSelectedEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
