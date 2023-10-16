import React from 'react'
import { Text } from '@alosix-hub-ui/react'
import configPayment from '../../../../../../config/payments'

import { Container } from './styles'

export default function ToastManual() {
  return (
    <Container>
      <Text>
        Para cada opção de calculo que selecionar é somado um valor de R$
        {configPayment.VALUE_DEFAULT} reais por tipo de calculo e número de
        culturas para adubação.
      </Text>
    </Container>
  )
}
