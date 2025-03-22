import {  createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Employee {
   id: number;
   firstName: string;
   middleName: string;
   lastName: string;
   email: string;
   mobileNumber: string;
   residentialAddress: string;
   contractType: string;
   startDate: string;
   finishDate: string;
   fullTimeOrPartTime: string;
   hoursPerWeek: number;
}

// Define initial state
const initialState = {
   employees: [] as Employee[],  // Store employees
   employeeForm: null as Employee | null,  // Store form data
   loading: false,  // Track loading state
   error: null as string | null,  // Track errors
};


const employeeSlice = createSlice({
   name: "employee",
   initialState,  // Use the corrected initial state
   reducers: {
      addEmployee: (state, action: PayloadAction<Employee>) => {
         state.employees.push(action.payload);
      },
      removeEmployee: (state, action: PayloadAction<number>) => {
         state.employees = state.employees.filter(emp => emp.id !== action.payload);
      },
      setEmployeeFormData: (state, action: PayloadAction<Employee>) => {
         state.employeeForm = action.payload;
      },
      updateEmployee: (state, action: PayloadAction<Employee>) => {
         const index = state.employees.findIndex(emp => emp.id === action.payload.id);
         if (index !== -1) {
            state.employees[index] = action.payload;
         }
      },
   },
   
});

export const { addEmployee, removeEmployee, setEmployeeFormData, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
