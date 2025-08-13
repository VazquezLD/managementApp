import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import { Login } from '../pages/Login/Login'
import Employee  from '../pages/Employee/Employee'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<h1>REGISTER</h1>}></Route>
            <Route element={<Layout />}>
                <Route path="/" element={<Employee/>} />
                <Route path="/graficos" element={<h1>Graficos</h1>} />
                <Route path="/profile" element={<h1>Perfil</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent