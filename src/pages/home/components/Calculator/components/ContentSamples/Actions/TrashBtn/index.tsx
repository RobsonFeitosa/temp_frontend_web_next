import { useOrder } from '@/hooks/providers/order'
import { TrashBtnContainer } from './styles'
import { useEffect, useState } from 'react'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { Trash, Warning } from 'phosphor-react'
import { ICreateSample } from '../../../../dtos/sample.dto'

interface TrashBtnProps {
  sampleOrder: ICreateSample
  onRemoveConfirmation: (sampleName: string) => void
}

export function TrashBtn({ sampleOrder, onRemoveConfirmation }: TrashBtnProps) {
  const [trashAction, setTrashAction] = useState(0)
  const {
    removeSamplesOrder,
    setSamplesOrderTotal,
    order: { samplesOrderTotal },
  } = useOrder()

  const refBtnRemove = useOutsideClick(() => {
    setTrashAction(0)
  })

  function handleRemoveSample() {
    setTrashAction((state) => state + 1)
  }

  const isWarning = trashAction === 1
  const isAlert = trashAction === 2

  useEffect(() => {
    if (isAlert) {
      onRemoveConfirmation(sampleOrder.description_cuture)
      setSamplesOrderTotal(samplesOrderTotal - 1)
      removeSamplesOrder(sampleOrder.description_cuture)
    }
  }, [
    isAlert,
    sampleOrder,
    removeSamplesOrder,
    setSamplesOrderTotal,
    samplesOrderTotal,
    onRemoveConfirmation,
  ])

  return (
    <div ref={refBtnRemove}>
      <TrashBtnContainer
        warning={isWarning}
        onClick={() => handleRemoveSample()}
        type="button"
      >
        {isWarning ? <Warning /> : <Trash />}
      </TrashBtnContainer>
    </div>
  )
}
