import { Link } from 'react-router-dom'
import AuthForm from './AuthForm.jsx'

function ResetPassword() {
  return (
    <AuthForm
      title="Crea una nueva contraseña"
      text="Elige una contraseña segura para tu cuenta."
      fields={[
        ['Nueva contraseña', 'password'],
        ['Confirma tu contraseña', 'password'],
      ]}
      button="Guardar contraseña"
      footer={<Link to="/login">Volver a iniciar sesión</Link>}
    />
  )
}

export default ResetPassword
