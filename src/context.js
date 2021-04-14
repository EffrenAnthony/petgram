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

  const value = {
    isAuth,
    activateUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
