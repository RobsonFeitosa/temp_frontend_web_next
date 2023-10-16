import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useMutation } from '@tanstack/react-query'
import { ICreatePixTransactionsDTO } from '../../../dtos/transactions.dto'
import { api } from '@/utils/handleClient'

interface CreatePixTransactionProps {
  payload: ICreatePixTransactionsDTO
}

const createPixTransaction = async ({ payload }: CreatePixTransactionProps) => {
  try {
    const response = await api.post(
      urlBuilder({
        address: [URLs.TRANSACTIONS, URLs.TRANSACTIONS_PIX].join('/'),
      }),
      payload,
    )

    return response
  } catch (error) {
    console.error(error)
  }
}

export const useCreatePixTransaction = () => {
  return useMutation({
    mutationFn: (payload: ICreatePixTransactionsDTO) =>
      createPixTransaction({ payload }),
  })
}
