import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmployeeList from "./components/EmployeeList/EmployeeList"
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails"

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/add-employee" element={<EmployeeDetails />} />
      <Route path="/employees/:employeeId" element={<EmployeeDetails />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
