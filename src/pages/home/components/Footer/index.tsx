import { Text } from '@alosix-hub-ui/react'
import { FooterContainer } from './styles'
import { LinkedinLogo } from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <Text>
        © 2021 - Todos os direitos reservados a
        <a href={process.env.NEXT_PUBLIC_URL}>alosix.com</a>
      </Text>{' '}
      <a href={`https://www.alosix.com/policy`}>Termos de uso e condições</a>
      <a
        href="https://www.linkedin.com/in/robson-feitosa-pimentel-41a55b125/"
        target="_blank"
        rel="noreferrer"
      >
        <Text as="small">
          project by
          <LinkedinLogo />
        </Text>
      </a>
    </FooterContainer>
  )
}
