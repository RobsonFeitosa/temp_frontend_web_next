import { Text } from '@alosix-hub-ui/react'

import { FiChevronDown } from 'react-icons/fi'

import { useOrder } from '@/hooks/providers/order'
import { useAuth } from '@/hooks/providers/auth'
import Balance from '../Balance'

import { BtnMoreBill, Container, Primary, Second } from './styles'
import { useGetMetaSample } from '@/hooks/useGetMetaSample'
import { useEffect } from 'react'
import DescountFirstCalculation from '../Balance/DescountFirstCalculation'
import { useRouter } from 'next/router'

export default function Nav() {
  const { user } = useAuth()
  const { configMetaSample } = useOrder()

  const { data: sampleMeta, refetch: getMetaSample } = useGetMetaSample()

  const {
    order: { act },
    toggleOrders,
  } = useOrder()

  useEffect(() => {
    user && getMetaSample()
  }, [user, getMetaSample])

  const total = sampleMeta?.data.total ?? 0
  const lastSampleName = sampleMeta?.data.lastSampleName

  useEffect(() => {
    sampleMeta &&
      configMetaSample({
        lastSampleName: sampleMeta.data.lastSampleName,
        total: sampleMeta.data.total,
      })
  }, [sampleMeta, configMetaSample])

  const router = useRouter()

  useEffect(() => {
    const pathRouter = router.route
    if (pathRouter !== '/') {
      toggleOrders(false)
    }
  }, [router, toggleOrders])

  return (
    <Container>
      {user ? (
        <Primary>
          <Text as="span">
            Amostras calculadas: <strong>{total}</strong>
          </Text>
          {lastSampleName && (
            <Text as="span">
              Última amostra: <strong>{lastSampleName}</strong>
            </Text>
          )}
        </Primary>
      ) : (
        <Text as="span">Acesse sua conta para registra amostras!</Text>
      )}

      {!user?.is_first_calculation && <DescountFirstCalculation />}
      {user && (
        <Second>
          <Text as="span" style={{ marginRight: 8 }}>
            Meu pedido{' '}
          </Text>
          <div>
            <BtnMoreBill onClick={() => toggleOrders(!act)}>
              <FiChevronDown size={16} />
            </BtnMoreBill>
            {act && <Balance />}
          </div>
        </Second>
      )}
    </Container>
  )
}
