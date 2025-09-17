import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import { Login } from '../pages/Login/Login'
import  Employee  from '../pages/Employee/Employee'
import { Home } from '../pages/Home/Home'
import  Services  from '../pages/Services/Services'


const RoutesComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="404" element={<h1>Error 404...</h1>}/>
            <Route path="/register" element={<h1>REGISTER</h1>}></Route>
            <Route element={<Layout />}>
                <Route path="/" element={<Home/>}/>
                <Route path="/empleados" element={<Employee/>} />
                <Route path="/graficos" element={<h1>Graficos</h1>} />
                <Route path="/servicios" element={<Services/>}/>
                <Route path="/profile" element={<h1>Perfil</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent