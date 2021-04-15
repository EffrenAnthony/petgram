import React, { useContext, useState } from 'react'

const AuthContext = React.createContext()

export function useAuthContext () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  function activateUser (token) {
    window.sessionStorage.setItem('token', token)
    return setIsAuth(!isAuth)
  }
  function removeAuth () {
    window.sessionStorage.removeItem('token')
    return setIsAuth(false)
  }

  const value = {
    isAuth,
    activateUser,
    removeAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
