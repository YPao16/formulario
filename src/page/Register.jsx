import { Link } from 'react-router-dom'
import AuthForm from './AuthForm.jsx'

function Register() {
  return (
    <AuthForm
      title="Crea tu cuenta"
      text="Un pequeño paso para empezar."
      fields={[
        ['Tu nombre', 'text'],
        ['Correo electrónico', 'email'],
        ['Contraseña', 'password'],
      ]}
      button="Crear cuenta"
      footer={<>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></>}
    />
  )
}

export default Register
