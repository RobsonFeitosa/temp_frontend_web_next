import { api } from '@/utils/handleClient'
import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useMutation } from '@tanstack/react-query'
import { ICreateSample } from '../../../dtos/sample.dto'
import { ToastMessage, useToast } from '@/hooks/providers/toast'
import { useOrder } from '@/hooks/providers/order'
import { IUser, useAuth } from '@/hooks/providers/auth'
import { useUpdateUserFirstCalculation } from '@/hooks/useUpdateUserFirstCalculation'

interface CreateSamplesProps {
  payload: ICreateSample[]
  user: IUser
  calculationNames: string[]
  addToast: (message: Omit<ToastMessage, 'id'>) => void
  resetAllOrders: () => void
  mutateUpdateUserFirstCalculationAsync: () => Promise<void>
}

const createSamples = async ({
  payload,
  user,
  addToast,
  calculationNames,
  resetAllOrders,
  mutateUpdateUserFirstCalculationAsync,
}: CreateSamplesProps) => {
  try {
    const response = await api.post(
      urlBuilder({
        address: URLs.SAMPLES,
      }),
      payload,
    )

    if (response.status === 200) {
      addToast({
        type: 'success',
        title: 'Amostra calculada',
        description: 'Seu laudo foi calculado com sucesso',
      })

      setTimeout(() => {
        const reportElement = document.getElementById('report')

        if (reportElement) {
          window.scrollTo({
            top: reportElement.offsetTop - 60,
            behavior: 'smooth',
          })
        }
      }, 1000)

      if (!user.is_first_calculation && calculationNames.length > 0) {
        await mutateUpdateUserFirstCalculationAsync()
      }
    } else {
      addToast({
        type: 'error',
        title: 'Amostra NÃO calculada',
        description:
          'Não foi possivel calcular a amostra, confira suas informações e tente novamente',
      })
    }

    resetAllOrders()

    return response
  } catch (error) {
    console.error(error)
  }
}

export const useCreateSamples = () => {
  const { addToast } = useToast()
  const { user } = useAuth()
  const {
    resetAllOrders,
    order: {
      orders: {
        calculations: { names },
      },
    },
  } = useOrder()
  const { mutateAsync: mutateUpdateUserFirstCalculationAsync } =
    useUpdateUserFirstCalculation(user?.id)

  return useMutation({
    mutationFn: (payload: ICreateSample[]) =>
      createSamples({
        payload,
        user,
        calculationNames: names,
        addToast,
        resetAllOrders,
        mutateUpdateUserFirstCalculationAsync,
      }),
  })
}
