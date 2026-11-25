import { useReducer } from 'react'
import { Contexto } from './contexto.jsx'
import MiReducer from './MiReducer.jsx'
import type from './type.js'
const estadoInicial = () => {
  const usuarioGuardado = localStorage.getItem('usuario')
  return {
    logeado: Boolean(usuarioGuardado),
    usuario: usuarioGuardado ? JSON.parse(usuarioGuardado) : null,
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(MiReducer, undefined, estadoInicial)

  const login = (sesion) => {
    localStorage.setItem('usuario', JSON.stringify(sesion))
    dispatch({ type: type.login, payload: sesion })
  }

  const cerrarSesion = () => {
    localStorage.removeItem('usuario')
    dispatch({ type: type.logout })
  }

  return (
    <Contexto.Provider value={{ ...state, login, cerrarSesion }}>
      {children}
    </Contexto.Provider>
  )
}
export default Provider