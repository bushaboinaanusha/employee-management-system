import EmployeeList from "./components/EmployeeList"
import {getAllEmployees} from "./services/employeeService"
import {useState,useEffect} from "react"
import EmployeeForm from "./components/EmployeeForm.jsx"



function App() {
  //const employees = [{ id: 1, name: "Anusha", dept: "IT" }, { id: 2, name: "Mikasa", dept: "Army" }]
  const[employees,setEmployees] = useState([]);
  const[loading,setLoading] = useState(false);
  const[error,setError] = useState("");
  
    
  useEffect(()=>{
    getAllEmployees().then((response)=>{
      setEmployees(response.data);
      setLoading(false);
    }).catch((error)=>{
      setError("Error Occured While Fetching the data")
      setLoading(false);
      console.error(error);
    });
  },[]);

const fetchEmployees = async() =>{
   const response = await getAllEmployees();
   setEmployees(response.data);
}




  return (
    <div>
      <h1>Employee Management</h1>
      {loading&&<p>Loading.....!</p>}
      {error&&<p>{error}</p>}
      {!loading && !error && employees.length === 0 && (
        <p>No Employees Found</p>
      )}
      {!loading && !error && employees.length > 0 && (
        <EmployeeList employees={employees} />
      )}
      <EmployeeForm onEmployeeAdded = {fetchEmployees} />
    </div>
  );
};
export default App;