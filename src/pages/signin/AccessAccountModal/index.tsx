import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextInput } from '@alosix-hub-ui/react'
import { useCreateSessions } from '../useCreateSessions'
import Link from 'next/link'
import { DialogCloseCustom } from '@/components/DialogCloseCustom'
import Or from '@/components/Or'
import {
  IGoogleCredentials,
  useCreateGoogleSessions,
} from '../useCreateGoogleSessions'
import { GoogleLogin } from '@react-oauth/google'
import { useOrder } from '@/hooks/providers/order'

import {
  AccessAccountModalContainer,
  BtnSendForgot,
  ButtonForm,
  Form,
  LinkWrapper,
  SessionGoogle,
} from './style'

export const signInFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export type SignInFormInput = z.infer<typeof signInFormSchema>

interface AccessAccountModalProps {
  onClose: () => void
  onOpenForgotModal: () => void
}

export function AccessAccountModal({
  onClose,
  onOpenForgotModal,
}: AccessAccountModalProps) {
  const { setOpenModalAccount } = useOrder()
  const { mutateAsync } = useCreateSessions()
  const { mutateAsync: mutateGoogleSessionAsync } = useCreateGoogleSessions()

  const { handleSubmit, register } = useForm<SignInFormInput>({
    resolver: zodResolver(signInFormSchema),
  })

  async function onSubmit(data: SignInFormInput) {
    try {
      await mutateAsync(data)
    } catch {}
  }

  async function handleLoginGoogle(response: IGoogleCredentials) {
    const { credential, clientId } = response

    setOpenModalAccount(false)
    await mutateGoogleSessionAsync({ clientId, credential })
  }

  return (
    <>
      <AccessAccountModalContainer>
        <DialogCloseCustom onClose={onClose} />
        <Form as="form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            startIcon={FiMail}
            placeholder="E-mail"
            {...register('email')}
          />

          <TextInput
            startIcon={FiLock}
            type="password"
            placeholder="Senha"
            {...register('password')}
          />

          <ButtonForm type="submit">Entrar</ButtonForm>
        </Form>

        <LinkWrapper>
          <BtnSendForgot
            type="button"
            onClick={() => {
              onClose()
              onOpenForgotModal()
            }}
          >
            Esqueci minha senha
          </BtnSendForgot>

          <Link href="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </LinkWrapper>

        <Or />

        <SessionGoogle>
          <GoogleLogin onSuccess={handleLoginGoogle} />
        </SessionGoogle>
      </AccessAccountModalContainer>
    </>
  )
}
