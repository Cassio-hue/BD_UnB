'use client'

import clsx from 'clsx'
import { Input } from './components/Input'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { Button } from './components/Button'
import { isAuthenticated, signIn } from './api/api'

interface DataType {
  email: string
  password: string
}

export default function Login() {
  // Limpa o token do localstorage
  localStorage.clear()

  const userFormDefaultValues: DataType = {
    email: '',
    password: '',
  }

  const methods = useForm<DataType>({
    defaultValues: userFormDefaultValues,
  })

  const onSubmit: SubmitHandler<DataType> = async (data) => {
    const token = await await signIn(data).catch(() => {
      alert('Erro ao realizar autenticação')
    })

    localStorage.setItem('token', token.token)
    localStorage.setItem('email', data.email)

    setTimeout(() => {
      if (isAuthenticated()) {
        alert('Login realizado com sucesso')
        window.location.href = '/home'
      }
    }, 2000)
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={clsx('flex flex-col gap-8 w-96')}
      >
        <Input name="email" type="email" label={'E-mail'} />
        <Input name="password" type="password" label={'Senha'} />
        <Button type="submit">Entrar</Button>
      </form>
    </FormProvider>
  )
}
