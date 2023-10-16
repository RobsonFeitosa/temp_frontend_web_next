import { api } from '@/utils/handleClient'
import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useQuery } from '@tanstack/react-query'

const getByIdSamples = async (id: string) => {
  try {
    const response = await api.get(
      urlBuilder({
        address: [URLs.SAMPLES, id].join('/'),
      }),
    )

    return response
  } catch (error) {
    console.error(error)
  }
}

export const useGetByIdSample = (id: string) => {
  return useQuery({
    queryKey: ['getByIdSamples'],
    queryFn: () => getByIdSamples(id),
    enabled: false,
  })
}
