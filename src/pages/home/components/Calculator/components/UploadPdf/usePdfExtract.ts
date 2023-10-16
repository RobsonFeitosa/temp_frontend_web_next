import { useOrder } from '@/hooks/providers/order'
import { api } from '@/utils/handleClient'
import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useMutation } from '@tanstack/react-query'

interface PdfExtract {
  data: FormData
  setSamplesOrderTotal: (total: number) => void
}

const pdfExtract = async ({ data, setSamplesOrderTotal }: PdfExtract) => {
  try {
    const response = await api.post(
      urlBuilder({
        address: URLs.SAMPLES_PDF_EXTRACT,
      }),
      data,
    )

    if (response.status === 200) {
      setSamplesOrderTotal(response.data.samples.length)
    }

    return response
  } catch (error) {
    console.error(error)
  }
}

export const usePdfExtract = () => {
  const { setSamplesOrderTotal } = useOrder()
  return useMutation({
    mutationFn: (data: FormData) =>
      pdfExtract({
        data,
        setSamplesOrderTotal,
      }),
  })
}
