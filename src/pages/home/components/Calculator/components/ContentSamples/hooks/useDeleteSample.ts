import { ToastMessage, useToast } from '@/hooks/providers/toast'
import { useGetMetaSample } from '@/hooks/useGetMetaSample'
import { useGetSamples } from '@/hooks/useGetSamples'
import { api } from '@/utils/handleClient'
import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useMutation } from '@tanstack/react-query'

interface DeleteSample {
  id: string
  addToast: (message: Omit<ToastMessage, 'id'>) => void
  getMetaSamples: () => void
  getSamples: () => void
}

const deleteSample = async ({
  id,
  addToast,
  getMetaSamples,
  getSamples,
}: DeleteSample) => {
  try {
    const response = await api.patch(
      urlBuilder({
        address: [URLs.SAMPLES, id].join('/'),
      }),
    )

    if (response.status === 200) {
      addToast({
        type: 'success',
        title: 'Amostra deletada',
        description: 'Essa amostra foi deletada da base de dados.',
      })

      getMetaSamples()
      getSamples()
    } else {
      addToast({
        type: 'error',
        title: 'Amostra NÃO deletada',
        description: `Não foi possivel deleter amostra N.A: ${id.slice(
          0,
          11,
        )}.`,
      })
    }
  } catch (error) {
    console.error(error)
  }
}

export const useDeleteSample = () => {
  const { addToast } = useToast()
  const { refetch: getMetaSamples } = useGetMetaSample()
  const { refetch: getSamples } = useGetSamples()

  return useMutation({
    mutationFn: (id: string) =>
      deleteSample({ id, addToast, getMetaSamples, getSamples }),
  })
}
