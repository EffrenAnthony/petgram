import React from 'react'
import { UserForm } from '../components/UserForm'
import { useAuthContext } from '../context'

export const NotRegisterUser = () => {
  const { activateUser } = useAuthContext()
  return (
    <>
      <UserForm onSubmit={activateUser} title='Registrarse' />
      <UserForm onSubmit={activateUser} title='Iniciar Sesion' />
    </>
  )
}
