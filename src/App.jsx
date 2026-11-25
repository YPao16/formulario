import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './page/Login.jsx'
import Register from './page/Register.jsx'
import RecoverPassword from './page/RecoverPassword.jsx'
import ResetPassword from './page/ResetPassword.jsx'
import Confirmation from './page/Confirmation.jsx'
import RickAndMorty from './page/RickAndMorty.jsx'
import RutasPrivadas from './routes/RutasPrivadas.jsx'
import RutasPublicas from './routes/RutasPublicas.jsx'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <main className="auth-page">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/confirmacion" element={<Confirmation />} />
          <Route element={<RutasPublicas />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/recuperar" element={<RecoverPassword />} />
            <Route path="/restablecer" element={<ResetPassword />} />
          </Route>
          <Route element={<RutasPrivadas />}>
            <Route path="/personajes" element={<RickAndMorty />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        <p className="copyright">Hecho con cariño, para ti.</p>
      </main>
    </BrowserRouter>
  )
}

export default App
