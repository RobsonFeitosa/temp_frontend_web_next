import DashboardLayout from '@/components/components/Layout/Dashboard'
import MainLayout from '@/components/components/Layout/Main'
import { Heading } from '@alosix-hub-ui/react'
import { Container } from 'react-bootstrap'
import { OrderSingle, OrdersContainer, OrdersContent } from './styles'
import { useGetOrders } from './useGetOrders'
import { useEffect } from 'react'
import { IOrders } from '@/pages/home/components/Calculator/dtos/orders.dto'

export default function Orders() {
  const { data: ordersData, refetch: getOrders } = useGetOrders({
    limit: 6,
    page: 1,
  })

  useEffect(() => {
    getOrders()
  }, [getOrders])

  const orderData = ordersData?.data as IOrders

  return (
    <OrdersContainer>
      <MainLayout>
        <Container>
          <DashboardLayout>
            <Heading as="h5">Pedidos</Heading>

            <OrdersContent>
              {orderData &&
                orderData.data.map((order) => {
                  // const calculationOptions = JSON.parse(order.calculate_options) as CalculateOPtions;

                  return (
                    <OrderSingle key={order.id}>
                      <span>{order.cod_order}</span>
                    </OrderSingle>
                  )
                })}
            </OrdersContent>
          </DashboardLayout>
        </Container>
      </MainLayout>
    </OrdersContainer>
  )
}
