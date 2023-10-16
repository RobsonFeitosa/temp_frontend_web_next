import { api } from '@/utils/handleClient'
import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useMutation } from '@tanstack/react-query'
import ICreateOrderDTO from '../../../dtos/orders.dto'
import { useCreateTransaction } from './useCreateTransaction'
import {
  ICreatePixTransactionsDTO,
  ICreateTransactionsDTO,
} from '../../../dtos/transactions.dto'
import { useCreatePixTransaction } from './useCreatePixTransaction'
import { AxiosResponse } from 'axios'
import { useOrder } from '@/hooks/providers/order'

function add10Minutes() {
  const minutesToAdd = 20
  const currentDate = new Date()
  const futureDate = new Date(currentDate.getTime() + minutesToAdd * 60000)
  return futureDate
}

interface CreateOrderProps {
  payload: ICreateOrderDTO
  amount: number
  namesCalculations: string[]
  setPaid: (paid: boolean) => void
  setQRCode: (url: string) => void
  onTid: (id: string) => void
  setOrderId: (id: string) => void
  mutateTransactionsAsync: (
    payloadTransactions: ICreateTransactionsDTO,
  ) => Promise<AxiosResponse<any, any> | undefined>
  mutatePixTransactionsAsync: (
    payloadPixTransactions: ICreatePixTransactionsDTO,
  ) => Promise<AxiosResponse<any, any> | undefined>
}

const createOrder = async ({
  payload,
  amount,
  namesCalculations,
  onTid,
  setPaid,
  setOrderId,
  setQRCode,
  mutateTransactionsAsync,
  mutatePixTransactionsAsync,
}: CreateOrderProps) => {
  try {
    const responseOrder = await api.post(
      urlBuilder({
        address: URLs.ORDERS,
      }),
      { calculateOptions: payload },
    )

    if (namesCalculations.length === 0) {
      setPaid(true)
      return
    }

    if (responseOrder.status === 200) {
      setOrderId(responseOrder.data.id)
      const responseTransaction = await mutateTransactionsAsync({
        api_key: process.env.NEXT_PUBLIC_PAGARME_API_KEY ?? 'key-not-exist',
        amount,
        payment_method: 'pix',
        pix_expiration_date: add10Minutes(),
        pix_additional_fields: [
          {
            name: 'Qty',
            value: '1',
          },
        ],
      })

      if (!responseTransaction) {
        return
      }

      if (responseTransaction.status === 200) {
        setQRCode(responseTransaction.data.pix_qr_code)
        const responsePix = await mutatePixTransactionsAsync({
          order_id: responseOrder.data.id,
          amount,
          brand: 'null',
          payment_method: 'pix',
          status: 'waiting_payment',
          tid: responseTransaction.data.tid,
        })

        if (!responsePix) {
          return
        }

        if (responsePix.status === 200) {
          onTid(responsePix.data.tid)
        }
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export const useCreateOrder = () => {
  const {
    order: {
      total,
      orders: {
        calculations: { names },
      },
    },
    setQRCode,
    setPaid,
    setOrderId,
    setTransactionId,
  } = useOrder()
  const { mutateAsync: mutateTransactionsAsync } = useCreateTransaction()
  const { mutateAsync: mutatePixTransactionsAsync } = useCreatePixTransaction()

  const amount = total * 100

  function onTid(id: string) {
    setTransactionId(id)
  }

  return useMutation({
    mutationFn: (payload: ICreateOrderDTO) =>
      createOrder({
        payload,
        namesCalculations: names,
        setPaid,
        setOrderId,
        mutateTransactionsAsync,
        mutatePixTransactionsAsync,
        amount,
        setQRCode,
        onTid,
      }),
  })
}
