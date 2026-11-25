import { Link } from 'react-router-dom'

function Confirmation() {
  return (
    <section className="card">
      <Link className="brand" to="/login" aria-label="inicio">
        <span className="brand-icon">l</span> ...
      </Link>
      <div className="success-icon" aria-hidden="true">✓</div>
      <h1>¡Listo!</h1>
      <p className="intro">
        Terminaste este paso. Esta demostración no envía correos ni guarda cuentas.
      </p>
      <Link className="button-link" to="/login">Volver al inicio</Link>
      <p className="footer"><Link to="/registro">Crear otra cuenta</Link></p>
    </section>
  )
}

export default Confirmation


