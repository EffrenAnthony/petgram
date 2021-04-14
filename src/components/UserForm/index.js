import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title, Error } from './style'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }
  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder='Email' type='email' {...email} disabled={disabled} />
        <Input placeholder='Password' type='password' {...password} disabled={disabled} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {
        error && <Error>{error}</Error>
      }
    </>
  )
}
