import RoutesComponent from "./routes/Routes";
import { EmployeesProvider } from "./hooks/useEmployees";

function App() {
  return (
    <EmployeesProvider>
      <RoutesComponent />
    </EmployeesProvider>
  )
}

export default App
