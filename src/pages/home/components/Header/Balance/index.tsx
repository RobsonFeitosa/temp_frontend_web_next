import React, { useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import {} from 'react-icons/bs'

import configPayment from '../../../../../config/payments'

import {
  Container,
  FooterTotal,
  FirstCalculation,
  ContentBalance,
  BtnToggleManual,
  HeaderBalance,
  FooterBalance,
  BtnToggleDescount,
  FooterHead,
} from './styles'
import DescountFirstCalculation from './DescountFirstCalculation'
import { useAuth } from '@/hooks/providers/auth'
import { Heading, Text } from '@alosix-hub-ui/react'
import formatValue from '@/utils/formatValue'
import { useOrder } from '@/hooks/providers/order'
import ToastManual from './ToastManual'

export default function Balance() {
  const [manual, setManual] = useState(false)
  const [descountInfo, setDescountInfo] = useState(false)
  const { order } = useOrder()
  const { user } = useAuth()
  const {
    count,
    total,
    orders: { calculations },
  } = order

  // const countDefined = cleanMode ? count - 1 : count

  return (
    <Container>
      <div>
        <HeaderBalance>
          <BtnToggleManual
            onClick={() => setManual(!manual)}
            style={{ color: manual ? '#5c9d3d' : '#5e6028' }}
          >
            <Heading as="h5">
              Pedido de calculo
              <FaInfoCircle size={18} />
            </Heading>
          </BtnToggleManual>
          <Text as="strong">calculos: {count}</Text>
        </HeaderBalance>
        <hr />
        {manual && (
          <>
            <ToastManual />
            <hr />
          </>
        )}
        <ContentBalance>
          <ul>
            <li>
              <div>
                <Text as="strong" size="xs">
                  Interpretação do complexo sortivo - Gratuito
                </Text>
              </div>
            </li>
            <li>
              {calculations.names.includes('liming') && (
                <div>
                  <Text as="strong" size="xs">
                    Cálculo da necessidade de calcário
                  </Text>
                </div>
              )}
            </li>
            <li>
              {calculations.names.includes('plaster') && (
                <div>
                  <Text as="strong" size="xs">
                    Cálculo da necessidade de gesso
                  </Text>
                </div>
              )}
            </li>
            <li>
              {calculations.names.includes('fertilizing') &&
                calculations.fertilizing.length > 0 && (
                  <div>
                    <div>
                      <Text as="strong" size="xs">
                        Adubação ({calculations.fertilizing.length}):{' '}
                      </Text>
                      <Text as="span">
                        <i>
                          {calculations.fertilizing
                            .map((f: any) => f.calculation_option)
                            .join(', ')}
                        </i>
                      </Text>
                    </div>
                  </div>
                )}
            </li>
            <li>
              {calculations.names.includes('carbon_stock') && (
                <div>
                  <div>
                    <Text as="strong">Estoques de carbono no solo:</Text>{' '}
                    <Text as="span">
                      {calculations.carbon_stock.calculation_option}
                    </Text>
                  </div>
                </div>
              )}
            </li>
            <li>
              {calculations.names.includes('water_availability') && (
                <div>
                  <div>
                    <Text as="span">
                      <strong>Disponabilidade de água </strong>
                    </Text>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </ContentBalance>
        <hr />
        <FooterBalance>
          <>
            <FooterHead>
              <Text>Forma de pagamento: Pix</Text>
              <Text as="i">
                {order.samplesOrderTotal === 0 ? 1 : order.samplesOrderTotal}{' '}
                amostra{order.samplesOrderTotal > 1 && 's'}
              </Text>
            </FooterHead>
            <hr />
          </>
          <FooterTotal>
            <div>
              <Text as="span">TOTAL A PAGAR:</Text>
              {order.count > 1 ? (
                <>
                  <strong>{formatValue(total)}</strong>
                  {!user?.is_first_calculation &&
                    order.sampleMode === 'single' && (
                      <FirstCalculation>
                        <Text as="span">Custava</Text>

                        <Text as="strong">
                          {formatValue(
                            configPayment.VALUE_DEFAULT * (order.count - 1),
                          )}
                        </Text>
                        <BtnToggleDescount
                          onClick={() => setDescountInfo(!descountInfo)}
                          style={{
                            color: !descountInfo ? '#7f7f7f' : '#5e6028',
                          }}
                        >
                          <FaInfoCircle size={16} />
                        </BtnToggleDescount>
                      </FirstCalculation>
                    )}
                </>
              ) : (
                <Text as="strong">{formatValue(total)}</Text>
              )}
            </div>
          </FooterTotal>
          {descountInfo && <DescountFirstCalculation />}
        </FooterBalance>
      </div>
    </Container>
  )
}
