import { Navigate, Outlet } from 'react-router-dom'
import { useContexto } from '../context/contexto.jsx'

const RutasPublicas = () => {
  const { usuario } = useContexto()

  return usuario ? <Navigate to="/personajes" replace /> : <Outlet />
}

export default RutasPublicas