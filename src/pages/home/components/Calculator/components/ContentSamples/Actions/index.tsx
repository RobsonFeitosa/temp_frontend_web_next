import { useCallback, useState } from 'react'
import { ActionsContainer, BtnActConfirmation } from './style'
import { Check, Checks } from 'phosphor-react'
import { Text } from '@alosix-hub-ui/react'
import { ICreateSample } from '../../../dtos/sample.dto'
import { TrashBtn } from './TrashBtn'

interface ActionsProps {
  sampleOrder: ICreateSample
  isError: boolean
  onSampleConfirmation: (sampleName: string) => void
  onRemoveConfirmation: (sampleName: string) => void
}

export function Actions({
  sampleOrder,
  onSampleConfirmation,
  onRemoveConfirmation,
  isError,
}: ActionsProps) {
  const [success, setSuccess] = useState(false)

  const onConfirmation = useCallback(() => {
    onSampleConfirmation(sampleOrder.description_cuture)

    setSuccess((state) => !state)
  }, [setSuccess, sampleOrder, onSampleConfirmation])

  return (
    <ActionsContainer>
      <TrashBtn
        sampleOrder={sampleOrder}
        onRemoveConfirmation={onRemoveConfirmation}
      />

      <BtnActConfirmation
        type="button"
        onClick={() => onConfirmation()}
        isConfirmed={success}
        disabled={isError}
      >
        <Text as="span">Confirmar laudo</Text>
        {success ? <Checks /> : <Check />}
      </BtnActConfirmation>
    </ActionsContainer>
  )
}
