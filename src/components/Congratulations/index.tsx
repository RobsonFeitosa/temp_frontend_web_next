import { Text } from '@alosix-hub-ui/react'
import { CongratulationsContainer, SampleProccess } from './styles'
import { DialogCloseCustom } from '../DialogCloseCustom'

interface CongratulationsProps {
  onClose: () => void
}

export function Congratulations({ onClose }: CongratulationsProps) {
  return (
    <CongratulationsContainer>
      <DialogCloseCustom onClose={onClose} />

      <div>
        <Text>Sua amostra foi processada na página principal. </Text>

        <Text>
          E poderá acompanhar o relatório de suas amostras calculadas, imprimir
          <br />e compartilha - lás pelo seu painel administrativo.
        </Text>
      </div>
      <SampleProccess>
        <br />
        <Text as="i">Compartilhe com seus amigos essa iniciativa</Text>
        <Text as="span">Plante essa ideia!</Text>
      </SampleProccess>
    </CongratulationsContainer>
  )
}
