import React from 'react'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../container/RegisterMutation'
import { useLoginMutation } from '../container/LoginMutation'
import { useAuthContext } from '../context'

export const NotRegisterUser = () => {
  const { activateUser } = useAuthContext()
  const { register, loading: loadingRegister, error: errorRegister } = useRegisterMutation()
  const { login, loading: loadingLogin, error: errorLogin } = useLoginMutation()
  const onSubmitRegister = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(({ data }) => {
      const { signup } = data
      console.log(signup)
      activateUser(signup)
    }).catch(err => {
      console.log(err)
    })
  }
  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables }).then(({ data }) => {
      const { login } = data
      console.log(login)
      activateUser(login)
    }).catch(err => {
      console.log(err)
    })
  }
  const errorMsg = errorRegister && 'El usuario ya existe o hay algun problema'
  const errorLoginMsg = errorLogin && 'El usuario no existe o hay algun problema'
  return (
    <>
      <UserForm onSubmit={onSubmitRegister} title='Registrarse' error={errorMsg} disabled={loadingRegister} />
      <UserForm onSubmit={onSubmitLogin} title='Iniciar Sesion' error={errorLoginMsg} disabled={loadingLogin} />
    </>
  )
}
