import { Collaborators } from '@/dtos/Collaborators'
import { useGetCollaborators } from '@/hooks/useGetCollaborators'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Text } from '@alosix-hub-ui/react'

import { CollaboratorContent, CollaboratorsListContainer } from './styles'

export function CollaboratorsList() {
  const [collaborators, setCollaborators] = useState<Collaborators[] | null>(
    null,
  )
  const { data: dataCollaborators, refetch: getCollaborators } =
    useGetCollaborators()

  useEffect(() => {
    getCollaborators()
  }, [getCollaborators])

  useEffect(() => {
    dataCollaborators && setCollaborators(dataCollaborators.data)
  }, [dataCollaborators])

  return (
    <CollaboratorsListContainer>
      {collaborators?.map((collaborator: Collaborators) => (
        <CollaboratorContent key={collaborator.id}>
          <Image src={collaborator.logo_url} width={100} height={50} alt="" />
          <div>
            <Text>{collaborator.name}</Text>
            <Text>Palmas/TO</Text>
          </div>
        </CollaboratorContent>
      ))}
    </CollaboratorsListContainer>
  )
}
