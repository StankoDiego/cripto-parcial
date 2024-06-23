import { useState } from 'react'
import './App.css'
import { IUser, logginWithGoogle, logout } from './firebase/auth'

function App() {

  const [user, setUser] = useState<IUser | null>(null)

  const loggin = () => {
    logginWithGoogle()
      .then((response) => {
        setUser(response)
      })
  }

  const closeSession = () => {
    logout()
      .then(() => {
        setUser(null)
      })
  }

  return (
    <>
      <div className='vertical-container'>
        <button
          onClick={loggin}
        >
          Login con Google
        </button>

        <button
          onClick={closeSession}
        >
          Cerrar sesión
        </button>
      </div >
      {
        user !== null && (
          <>
            <div className='horizontal-container'>
              <span>{`Nombre de usuario: `}</span>
              {user?.name}
              <span>Email:</span>
              {user?.email}
            </div>
            <div className='horizontal-container'>
              <span>Foto de Perfil</span>
              <img src={user?.photo_url ?? ""} alt='Foto de perfil'></img>
            </div>
          </>
        )
      }
    </>
  )
}

export default App
