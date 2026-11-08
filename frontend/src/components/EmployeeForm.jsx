import {useState} from "react"
import { saveEmployee } from "../services/employeeService";


function EmployeeForm({onEmployeeAdded}){

    const[employee,setEmployee] = useState({
        name:"",
        email:"",
        department:"",
        salary:""
      });

      const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await saveEmployee({
      ...employee,
      salary: Number(employee.salary)
    });
    setEmployee({
    name: "",
    email: "",
    department: "",
    salary: ""
});
   onEmployeeAdded();
    alert("Employee added successfully!");

  } catch (error) {
    console.error("Error saving employee:", error);
    alert("Failed to add employee");
  }
};

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add Employee</h2>
            <input type="text"
            placeholder="Enter your name"
            value={employee.name}
            onChange={(e)=>
                setEmployee({
                    ...employee,name:e.target.value
                })
            }
            />

            <input type="text"
            placeholder="Enter your email"
            value={employee.email}
            onChange={(e)=>
                setEmployee({
                    ...employee,email:e.target.value
                })
            }
            />

            <input type="text"
            placeholder="Enter your department"
            value={employee.department}
            onChange={(e)=>
                setEmployee({
                    ...employee,department:e.target.value
                })
            }
            />

            <input type="text"
            placeholder="Enter your salary"
            value={employee.salary}
            onChange={(e)=>
                setEmployee({
                    ...employee,salary:e.target.value
                })
            }
            />
           <button type="submit">Save Employee</button>
        </form>
    )
}

export default EmployeeForm;