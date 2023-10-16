import { useState } from 'react'
import { ICreateSample } from '../dtos/sample.dto'
import { CollaboratorSingle } from '../dtos/collaborator.dto'

type UseSampleOrder = {
  samplesOrder: ICreateSample[]
  collaborator: CollaboratorSingle | null
  addSampleOrder: (order: ICreateSample) => void
  addCollaborator: (collaborator: CollaboratorSingle) => void
}

export const useSamplesOrder = (): UseSampleOrder => {
  const [collaborator, setCollaborator] = useState<CollaboratorSingle | null>(
    null,
  )
  const [samplesOrder, setSamplesOrder] = useState<ICreateSample[]>([])

  function addSampleOrder(order: ICreateSample) {
    setSamplesOrder((state) => [...state, order])
  }

  function addCollaborator(collaborator: CollaboratorSingle) {
    setCollaborator(collaborator)
  }

  return { samplesOrder, collaborator, addSampleOrder, addCollaborator }
}
