import { createContext, useContext, useState } from 'react'

export const Contexto = createContext(null)

export function ContextoProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  return (
    <Contexto.Provider value={{ usuario, setUsuario }}>
      {children}
    </Contexto.Provider>
  )
}

export function useContexto() {
  const contexto = useContext(Contexto)

  if (!contexto) {
    throw new Error('useContexto debe usarse dentro de ContextoProvider')
  }

  return contexto
}
