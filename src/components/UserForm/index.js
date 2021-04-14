import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Form, Input, Title } from './style'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder='Email' type='email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
