import { useState } from 'react'
import { Link } from 'react-router-dom'

function RickAndMorty() {
  const [characterId, setCharacterId] = useState('')
  const [character, setCharacter] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const id = Number(characterId)

    if (!Number.isInteger(id) || id < 1) {
      setError('Ingresa un ID válido (un número entero mayor que cero).')
      setCharacter(null)
      return
    }

    setLoading(true)
    setError('')
    setCharacter(null)

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      if (!response.ok) {
        if (response.status === 404) {
          setError(`No encontramos un personaje con el ID ${id}.`)
        } else {
          setError('No se pudo consultar la API. Inténtalo de nuevo más tarde.')
        }
        return
      }

      setCharacter(await response.json())
    } catch {
      setError('No se pudo conectar con la API. Revisa tu conexión e inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="rick-card">
      <Link className="rick-back" to="/login">← Volver al inicio</Link>
      <h1>Rick and Morty</h1>
      <p className="intro">Busca información de tus personajes favoritos por su ID.</p>

      <form className="character-search" onSubmit={handleSubmit}>
        <label className="field" htmlFor="character-id">
          ID del personaje
          <input
            id="character-id"
            type="number"
            min="1"
            step="1"
            value={characterId}
            onChange={(event) => setCharacterId(event.target.value)}
            placeholder="Por ejemplo, 1"
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar por ID'}
        </button>
      </form>

      {error && <p className="search-message search-error" role="alert">{error}</p>}

      {character && (
        <article className="character-result" aria-live="polite">
          <img src={character.image} alt={character.name} />
          <div className="character-details">
            <h2>{character.name}</h2>
            <p><strong>Estado:</strong> {character.status}</p>
            <p><strong>Especie:</strong> {character.species}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Origen:</strong> {character.origin.name}</p>
            <p><strong>Ubicación:</strong> {character.location.name}</p>
          </div>
        </article>
      )}
    </section>
  )
}

export default RickAndMorty
