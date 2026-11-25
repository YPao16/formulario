import { Link, useNavigate } from 'react-router-dom'
import { useContexto } from '../context/contexto.jsx'
const Login = () => {
  const { login } = useContexto()
  const navigate = useNavigate()

  function onSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    login({ usuario: data.get('email') })
    navigate('/personajes')
  }
  return (
    <section className="card">
      <h1>Iniciar sesión</h1>
      <p className="intro">Ingresa tus datos para continuar.</p>
      <form onSubmit={onSubmit}>
        <label className="field" htmlFor="email">
          Correo electrónico
          <input id="email" name="email" type="email" autoComplete="email" required />
        </label>
        <label className="field" htmlFor="password">
          Contraseña
          <input id="password" name="password" type="password" autoComplete="current-password" required />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p className="footer">
        ¿No tienes cuenta? <Link to="/registro">Registrarse</Link>
      </p>
      <p className="footer"><Link to="/recuperar">¿Olvidaste tu contraseña?</Link></p>
    </section> ) } 
    export default Login
