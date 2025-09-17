import { useState, createContext, useContext } from "react";
import { initialEmployees } from "../utils/Employees";

const EmployeesContext = createContext();

export function EmployeesProvider ({children}){

    const [employees, setEmployees] = useState(initialEmployees);
    const addNewEmployee = (employee) => {
        setEmployees((prevEmployees) => [...prevEmployees, employee]);
    };

    const deleteEmployeeById = (id) => {
        setEmployees(prevEmployees => prevEmployees.filter(emp => emp.id !== id));
    }

    return(
        <EmployeesContext.Provider value={{employees, addNewEmployee, deleteEmployeeById}}>
            {children}
        </EmployeesContext.Provider>
    )
}

export function useEmployee (){
    return useContext(EmployeesContext)
}