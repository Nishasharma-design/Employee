import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmployeeList from "./components/EmployeeList/EmployeeList"
import EmployeeDetails from "./components/EmployeeDetails/EmployeeDetails"
import AddEmployee from "./components/AddEmployee/AddEmployee";


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/add" element={<AddEmployee />} />
      <Route path="/edit-employee/:id" element={<EmployeeDetails />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
