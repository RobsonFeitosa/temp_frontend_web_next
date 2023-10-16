import React from 'react'
import { Text } from '@alosix-hub-ui/react'
import { FaStar } from 'react-icons/fa'

import { Container } from './styles'

export default function DescountFirstCalculation() {
  return (
    <Container>
      <FaStar />
      <Text as="span">Desconto de 90% para primeira amostra realizada</Text>
    </Container>
  )
}
