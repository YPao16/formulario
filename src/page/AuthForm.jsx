import { Link, useNavigate } from 'react-router-dom'

function AuthForm({ title, text, fields, button, footer, extra, nextPage = '/confirmacion' }) {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate(nextPage)
  }

  return (
    <section className="card">
      <Link className="brand" to="/login" aria-label="inicio">
        <span className="brand-icon">l</span> 
      </Link>
      <h1>{title}</h1>
      <p className="intro">{text}</p>
      <form onSubmit={handleSubmit}>
        {fields.map(([label, type]) => (
          <label className="field" key={label}>
            {label}
            <input
              type={type}
              placeholder={type === 'email' ? 'tu@correo.com' : label}
              autoComplete={type === 'password' ? 'current-password' : type === 'email' ? 'email' : 'name'}
              minLength={type === 'password' ? 8 : undefined}
              required
            />
          </label>
        ))}
        {extra && <div className="extra">{extra}</div>}
        <button type="submit">{button}</button>
      </form>
      <p className="footer">{footer}</p>
    </section>
  )
}

export default AuthForm
