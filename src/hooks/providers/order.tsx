import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useAuth } from './auth'
import configPayment from '../../config/payments'
import { ICreateSample } from '@/pages/home/components/Calculator/dtos/sample.dto'
import { CollaboratorSingle } from '@/pages/home/components/Calculator/dtos/collaborator.dto'
import { parseCookies, setCookie } from 'nookies'

export interface IRegisterDTO {
  cpf: string
  phone_number: string
  zipcode: string
  city: string
  state: string
  country: string
  neighborhood: string
  street: string
  street_number: string
}

type SampleMode = 'single' | 'multiple'

interface IPaymmentEnough {
  isEnough: boolean
  diference: number
}

interface IConfigPayment {
  paymentIsEnough: IPaymmentEnough
  methodPayment: string
  useBalance: boolean
  pixQRCodeURL: string
  hasAddress: boolean
  paid: boolean
}

interface ICalculationsOptions {
  calculation_option: string
  value: string | null
}

interface IAddingCalculationType {
  name: string
  value?: string
  values?: string[]
  type: 'calculation' | 'fertilizing' | 'carbon_stock' | 'water_availability'
}

export interface ICalculationOptions {
  calculations: {
    actParent: boolean
    names: string[]
    fertilizing: ICalculationsOptions[]
    carbon_stock: ICalculationsOptions
  }
}

export interface Order {
  samples: ICreateSample[]
  samplesOrderTotal: number
  orders: ICalculationOptions
  orderId: string
  total: number
  count: number
  transferId: string
  cardId: string
  sampleMode?: SampleMode
  act: boolean
  config: IConfigPayment
  isOpenModalAccount: boolean
}

export interface MetaSample {
  total: number
  lastSampleName: string
}

interface OrdersContextData {
  addCalculateOptions({
    value,
    name,
    type,
    values,
  }: IAddingCalculationType): void
  addSamplesOrder(sampleOrder: ICreateSample): void
  setSamplesOrderTotal(total: number): void
  removeSamplesOrder(description: string): void
  configMetaSample(meta: MetaSample): void
  addCollaboratorOrder(collaborator: CollaboratorSingle): void
  setEmptySamplesOrder(): void
  setQRCode(url: string): void
  setTransactionId(id: string): void
  setOrderId(id: string): void
  // setUpdateSample(field: string, unity: string): void
  setSampleCreate(samples: ICreateSample[]): void
  toggleOrders(act: boolean): void
  setEmptyOrder(): void
  setEmptyCalculationOptions(): void
  setPaid(paid: boolean): void
  setSampleMode(mode: SampleMode): void
  resetAllOrders(): void
  toggleUseBalance(act: boolean): void
  setActParent(act: boolean): void
  setOpenModalAccount(act: boolean): void
  order: Order
  samplesOrder: ICreateSample[]
  metaSample: MetaSample
  collaborator: CollaboratorSingle | null
}

const emptyOrder: Order = {
  samples: [],
  samplesOrderTotal: 0,
  act: false,
  orders: {
    calculations: {
      actParent: false,
      names: [],
      fertilizing: [],
      carbon_stock: {
        calculation_option: '',
        value: '',
      },
    },
  },
  orderId: '',
  transferId: '0',
  cardId: '',
  count: 0,
  total: 0,
  sampleMode: 'single',
  config: {
    paymentIsEnough: {
      diference: 0,
      isEnough: false,
    },
    methodPayment: 'Pix',
    useBalance: false,
    hasAddress: false,
    paid: false,
    pixQRCodeURL: '',
  },
  isOpenModalAccount: false,
}

const OrderContext = createContext<OrdersContextData>({} as OrdersContextData)

const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth()
  const { VALUE_DEFAULT } = configPayment

  const [order, setOrder] = useState<Order>(() => {
    const cookies = parseCookies()
    const { '@Alosix:order': orderCookie } = cookies

    if (orderCookie) {
      return JSON.parse(orderCookie)
    }

    return emptyOrder
  })

  const VALUE_PAYMENT = !user?.is_first_calculation
    ? VALUE_DEFAULT - VALUE_DEFAULT * 0.9
    : VALUE_DEFAULT

  const descountPayment =
    order.sampleMode === 'multiple' ? VALUE_DEFAULT : VALUE_PAYMENT

  const [collaborator, setCollaborator] = useState<CollaboratorSingle | null>(
    null,
  )
  const [metaSample, setMetaSample] = useState<MetaSample>(() => {
    const cookies = parseCookies()

    const { '@Alosix:sample': sampleCookie } = cookies

    if (sampleCookie) {
      return JSON.parse(sampleCookie)
    }

    return {
      total: 0,
      lastSampleName: '',
    }
  })

  const [samplesOrder, setSampleCreatesOrder] = useState<ICreateSample[]>([])

  const configMetaSample = useCallback((meta: MetaSample) => {
    setMetaSample(meta)
  }, [])

  const addSamplesOrder = useCallback((sampleOrder: ICreateSample) => {
    setSampleCreatesOrder((state) => [...state, sampleOrder])
  }, [])

  const addCollaboratorOrder = useCallback(
    (collaborator: CollaboratorSingle) => {
      setCollaborator(collaborator)
    },
    [],
  )

  const setEmptySamplesOrder = useCallback(() => {
    setSampleCreatesOrder([])
    setCollaborator(null)
  }, [])

  const addCalculateOptions = useCallback(
    ({ name, type, value, values }: IAddingCalculationType) => {
      const { calculations } = order.orders
      switch (type) {
        case 'calculation':
          if (calculations) {
            setOrder((state) => {
              const belongCalculations = calculations.names.includes(name)
              const calculationsCurrent = state.orders.calculations

              const newNames: string[] = [...calculationsCurrent.names, name]

              const namesCurrent = calculationsCurrent.names.filter(
                (n: string) => n !== name,
              )
              const newOrder = {
                ...state,
                orders: {
                  ...state.orders,
                  calculations: {
                    ...state.orders.calculations,
                    names: belongCalculations ? namesCurrent : newNames,
                    carbon_stock: belongCalculations
                      ? {
                          calculation_option: '',
                          value: '',
                        }
                      : state.orders.calculations.carbon_stock,
                  },
                },
              }

              return newOrder
            })
          }
          break
        case 'fertilizing':
          if (values) {
            setOrder((state) => {
              const fertilizers = values.map((n) => ({
                calculation_option: n,
                value: n,
              }))
              const newOrder = {
                ...state,
                orders: {
                  ...state.orders,
                  calculations: {
                    ...state.orders.calculations,
                    fertilizing: fertilizers,
                  },
                },
              }
              return newOrder
            })
          }
          break
        case 'carbon_stock':
          if (value) {
            setOrder((state) => {
              const newOrder = {
                ...state,
                orders: {
                  ...state.orders,
                  calculations: {
                    ...state.orders.calculations,
                    carbon_stock: {
                      calculation_option: name || '',
                      value,
                    },
                  },
                },
              }
              return newOrder
            })
          }
          break
        case 'water_availability':
          if (value) {
            setOrder((state) => {
              const newOrder = {
                ...state,
                orders: {
                  ...state.orders,
                  calculations: {
                    ...state.orders.calculations,
                    water_availability: {
                      value,
                    },
                  },
                },
              }
              return newOrder
            })
          }
          break
        default:
          break
      }
    },
    [order.orders],
  )

  const setEmptyCalculationOptions = useCallback(() => {
    setOrder((state) => ({
      ...state,
      orders: {
        calculations: {
          actParent: false,
          names: [],
          fertilizing: [],
          carbon_stock: {
            calculation_option: '',
            value: '',
          },
        },
      },
    }))
  }, [])

  const count = useCallback((): number => {
    if (!order.orders.calculations) {
      return 0
    }
    const { names, fertilizing, carbon_stock } = order.orders.calculations
    if (!names || !fertilizing || !carbon_stock) {
      return 0
    }

    const isFertilizing = names.includes('fertilizing')

    const calculationTotal = isFertilizing ? names.length - 1 : names.length

    const total = calculationTotal + fertilizing.length
    return 1 + total
  }, [order.orders.calculations])

  // CALCULO DA AMOSTRA --  TEMPORARIO
  const sumCalculated = useCallback((): number => {
    const { names, fertilizing, carbon_stock } = order.orders.calculations
    if (!names || !fertilizing || !carbon_stock) {
      return 0
    }

    const isFertilizing = names.includes('fertilizing')

    const calculationTotal = isFertilizing ? names.length - 1 : names.length

    const total = calculationTotal + fertilizing.length
    const liquid =
      order.samplesOrderTotal > 0 ? order.samplesOrderTotal * total : total

    return liquid * descountPayment
  }, [order.orders.calculations, order.samplesOrderTotal, descountPayment])

  useEffect(() => {
    const { names, fertilizing, carbon_stock } = order.orders.calculations
    const actTruly = names.length > 0 && !!fertilizing && !!carbon_stock

    const { actParent } = order.orders.calculations

    setOrder((state) => ({
      ...state,
      act: actParent ? false : actTruly,
      count: count(),
      total: sumCalculated(),
    }))
  }, [order.orders.calculations, sumCalculated, count])

  const toggleOrders = useCallback((act: boolean) => {
    setOrder((state) => ({
      ...state,
      act,
    }))
  }, [])

  const setSamplesOrderTotal = useCallback((total: number) => {
    setOrder((state) => ({
      ...state,
      samplesOrderTotal: total,
    }))
  }, [])

  const removeSamplesOrder = useCallback(
    (description: string) => {
      setSampleCreatesOrder((state) =>
        state.filter((s) => s.description_cuture !== description),
      )
    },
    [setSampleCreatesOrder],
  )

  const setActParent = useCallback((act: boolean) => {
    setOrder((state) => ({
      ...state,
      orders: {
        ...state.orders,
        calculations: {
          ...state.orders.calculations,
          actParent: act,
        },
      },
    }))
  }, [])

  const toggleUseBalance = useCallback((act: boolean) => {
    setOrder((state) => ({
      ...state,
      config: {
        ...state.config,
        useBalance: act,
      },
    }))
  }, [])

  const setPaid = useCallback((paid: boolean) => {
    setOrder((state) => ({
      ...state,
      config: {
        ...state.config,
        paid,
      },
    }))
  }, [])

  const setEmptyOrder = useCallback(() => {
    const newEmpty = emptyOrder

    newEmpty.sampleMode = order.sampleMode

    setOrder(newEmpty)

    setCookie(null, '@Alosix:order', JSON.stringify(newEmpty), {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })
  }, [order.sampleMode])

  const setTransactionId = useCallback((id: string) => {
    setOrder((state) => ({
      ...state,
      transferId: id,
    }))
  }, [])

  const setOrderId = useCallback((id: string) => {
    setOrder((state) => ({
      ...state,
      orderId: id,
    }))
  }, [])

  const setSampleCreate = useCallback((samples: ICreateSample[]) => {
    setOrder((state) => ({
      ...state,
      samples,
    }))
  }, [])

  const setOpenModalAccount = useCallback((act: boolean) => {
    setOrder((state) => ({
      ...state,
      isOpenModalAccount: act,
    }))
  }, [])

  const setSampleMode = useCallback((mode: SampleMode) => {
    setOrder((state) => ({
      ...state,
      sampleMode: mode,
    }))
  }, [])

  const setQRCode = useCallback((url: string) => {
    setOrder((state) => ({
      ...state,
      config: { ...state.config, pixQRCodeURL: url },
    }))
  }, [])

  const resetAllOrders = useCallback(() => {
    setEmptyOrder()
    toggleOrders(false)
  }, [setEmptyOrder, toggleOrders])

  useEffect(() => {
    if (user) {
      setCookie(null, '@Alosix:order', JSON.stringify(order), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })
    }
  }, [order, user])

  useEffect(() => {
    metaSample &&
      setCookie(null, '@Alosix:sample', JSON.stringify(metaSample), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })
  }, [metaSample])

  return (
    <OrderContext.Provider
      value={{
        addSamplesOrder,
        setSampleCreate,
        setQRCode,
        configMetaSample,
        setSamplesOrderTotal,
        resetAllOrders,
        addCalculateOptions,
        removeSamplesOrder,
        setEmptyOrder,
        setTransactionId,
        toggleOrders,
        toggleUseBalance,
        setSampleMode,
        setActParent,
        setOrderId,
        setPaid,
        setEmptySamplesOrder,
        setEmptyCalculationOptions,
        addCollaboratorOrder,
        setOpenModalAccount,
        samplesOrder,
        order,
        metaSample,
        collaborator,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

function useOrder(): OrdersContextData {
  const context = useContext(OrderContext)

  if (!context) {
    throw new Error('useOrder must be used within a OrderProvider')
  }

  return context
}

export { OrderProvider, useOrder }
