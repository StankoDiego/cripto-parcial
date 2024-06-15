import { useState } from 'react'
import './App.css'
import { IUser, logginWithGoogle, logout } from './firebase/auth'



function App() {

  const [user, setUser] = useState<IUser | null>(null)

  const loggin = () => {
    logginWithGoogle()
      .then((response) => setUser(response))
  }

  const closeSession = () => {
    logout()
      .then(() => {
        setUser(null)
      })
  }

  return (
    <div >
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

      <span>{user?.name}</span>
      <span> {user?.email}</span>

      {
        user !== null && (
          <img src={user?.photo_url ?? ""} alt='Foto de perfil'></img>
        )
      }

    </div >
  )
}

export default App
