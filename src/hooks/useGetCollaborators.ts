import { api } from '@/utils/handleClient'
import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useQuery } from '@tanstack/react-query'

const getCollaborators = async () => {
  try {
    const response = await api.get(
      urlBuilder({
        address: URLs.COLLABORATORS,
      }),
    )

    return response
  } catch (error) {
    console.error(error)
  }
}

export const useGetCollaborators = () => {
  return useQuery({
    queryKey: ['getCollaborators'],
    queryFn: () => getCollaborators(),
    enabled: false,
  })
}
