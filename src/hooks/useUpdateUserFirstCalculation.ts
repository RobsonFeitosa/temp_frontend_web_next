import { api } from '@/utils/handleClient'
import { URLs, urlBuilder } from '@/utils/urlBuilder'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from './providers/auth'

const updateUserFirstCalculation = async (
  userId: string,
  setIsFirstCalculation: () => void,
) => {
  try {
    await api
      .put(
        urlBuilder({
          address: [URLs.USERS, userId].join('/'),
        }),
        { is_first_calculation: true },
      )
      .then((response) => {
        if (response.status === 200) {
          setIsFirstCalculation()
        }
      })

      .catch((err) => {
        console.error(err)
      })
  } catch (error) {
    console.error(error)
  }
}

export const useUpdateUserFirstCalculation = (userId: string) => {
  const { setIsFirstCalculation } = useAuth()

  return useMutation({
    mutationFn: () => updateUserFirstCalculation(userId, setIsFirstCalculation),
  })
}
