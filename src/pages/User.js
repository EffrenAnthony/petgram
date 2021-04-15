import React from 'react'
import { SubmitButton } from '../components/SubmitButton'
import { useAuthContext } from '../context'

export const User = () => {
  const { removeAuth } = useAuthContext()
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </>
  )
}
