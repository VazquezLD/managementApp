import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from '../components/Layout'
import { Login } from '../pages/Login/Login'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Layout />}>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/flashcards" element={<h1>Flashcards</h1>} />
                <Route path="/profile" element={<h1>Perfil</h1>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent