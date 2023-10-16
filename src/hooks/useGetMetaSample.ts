import { api } from '@/utils/handleClient'
import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useQuery } from '@tanstack/react-query'

const getMetaSample = async () => {
  try {
    const response = await api.get(
      urlBuilder({
        address: [URLs.SAMPLES, URLs.SAMPLES_META].join(''),
      }),
    )

    return response
  } catch (error) {
    console.error(error)
  }
}

export const useGetMetaSample = () => {
  return useQuery({
    queryKey: ['getMetaSample'],
    queryFn: () => getMetaSample(),
    enabled: false,
  })
}
