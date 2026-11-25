import { Link } from 'react-router-dom'
import AuthForm from './AuthForm.jsx'

function RecoverPassword() {
  return (
    <AuthForm
      title="¿Olvidaste tu contraseña?"
      text="Escribe tu correo y te ayudamos a recuperarla."
      fields={ [['Correo electrónico', 'email']] }
      button="Enviar instrucciones"
      nextPage="/restablecer"
      footer={<Link to="/login">Volver a iniciar sesión</Link>}
    />
  )
}

export default RecoverPassword
