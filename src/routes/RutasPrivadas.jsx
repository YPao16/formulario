import { Navigate, Outlet } from 'react-router-dom'
import { useContexto } from '../context/contexto.jsx'

const RutasPrivadas = () => {
  const { usuario } = useContexto()

  return usuario ? <Outlet /> : <Navigate to="/login" replace />
}

export default RutasPrivadas