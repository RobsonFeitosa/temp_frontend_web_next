import { useCallback, useEffect, useState } from 'react'
import { Form, SamplesContainer } from './styles'
import { useOrder } from '@/hooks/providers/order'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@alosix-hub-ui/react'
import { CalculateOptions } from '../CalculateOptions'
import { IConvertKey, ICreateSample } from '../../dtos/sample.dto'
import { SampleOrderContainer } from './SampleOrderContainer'
import { Fields } from '../CalculateOptions/OptionsFields/config'
import buildFertilizingPayload from '../../utils/buildFertilizingPayload'
import { CalculateEnum } from '../../enum/calculate.enum'
import { calculateSingleFormSchema } from './schemas/calculateSingleFormSchema'
import { calculationsRefineSchema } from './schemas/calculationsRefineSchema'
import { defaultFieldsBuild } from './schemas/defaultFieldsBuild'
import { transformFormToUnits } from '../../utils/transformFormToUnits'
import { useCreateOrder } from './hooks/useCreateOrder'
import { useToast } from '@/hooks/providers/toast'
import { useAuth } from '@/hooks/providers/auth'

function dataVerifyExtractor(
  payload: ICreateSample[],
  samplesExtractor: string[],
) {
  return payload.filter((sample) =>
    samplesExtractor.includes(sample.description_cuture),
  )
}

const calculateFormSchemaArray = z.object({
  data: calculateSingleFormSchema.array(),
  calculations: calculationsRefineSchema,
})

type CalculatorFormData = z.infer<typeof calculateFormSchemaArray>

export function ContentSamples() {
  const { user } = useAuth()
  const [, setIsLoading] = useState(true)

  const {
    samplesOrder,
    order: {
      samplesOrderTotal,
      orders: { calculations },
    },
    setOpenModalAccount,
    setEmptySamplesOrder,
    setSampleCreate,
  } = useOrder()

  const [itemConvert, setItemConvert] = useState<ICreateSample[]>(samplesOrder)

  // const [itemConvert, setItemConvert] =
  //   useState<Omit<ICreateSample[], 'user_id' | 'calculate' | 'city' | 'uf'>>()

  const { addToast } = useToast()

  const [sampleConfirmation, setSampleConfirmation] = useState<string[]>([])

  const {
    handleSubmit,
    control,
    trigger,
    setValue,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<CalculatorFormData>({
    resolver: zodResolver(calculateFormSchemaArray),
    defaultValues: {
      data: defaultFieldsBuild(samplesOrder),
      calculations: {
        fertilizing_objective_culture_before_milho: '',
      },
    },
    mode: 'all',
  })

  const hasSamples = samplesOrder.length > 0

  const { mutateAsync: mutateOrderAsync } = useCreateOrder()
  //   TODO: Melhorar transformacao de dados abaixo (NewData)

  const onConvertUnity = useCallback(
    (data: IConvertKey) => {
      const key = Object.keys(data)[0]
      const { unity, value } = data[key]

      if (key === 'tb_1_clay' || key === 'tb_1_silt' || key === 'tb_1_sand') {
        // setItemConvert((old) =>
        //   Object.keys(old).includes(key)
        //     ? {
        //         ...old,
        //         tb_1_clay: { value, unity },
        //         tb_1_silt: { value, unity },
        //         tb_1_sand: { value, unity },
        //       }
        //     : {
        //         ...itemConvert,
        //         tb_1_clay: { value, unity },
        //         tb_1_silt: { value, unity },
        //         tb_1_sand: { value, unity },
        //       },
        // )
      }

      setItemConvert((old) =>
        Object.keys(old).includes(key)
          ? { ...old, [key]: { value, unity } }
          : {
              ...itemConvert,
              [key]: { value, unity },
            },
      )
    },
    [itemConvert],
  )

  useEffect(() => {
    if (hasSamples) {
      trigger()

      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  }, [hasSamples, trigger])

  async function handleRegister(data: CalculatorFormData) {
    const fertilizingBuilding = buildFertilizingPayload(data.calculations)

    if (sampleConfirmation.length !== samplesOrderTotal) {
      addToast({
        type: 'info',
        title: 'Confirmação das amostras',
        description:
          'É necessário confirmar todas as amostras extraidas do pdf.',
      })
      return false
    }

    //   TODO: Melhorar transformacao de dados abaixo (NewData)
    const carbon_stock_density_soil =
      data.calculations?.carbon_stock_density_soil

    const newData: ICreateSample[] = data.data.map(
      (sample, index): ICreateSample => {
        const newFields = transformFormToUnits(sample, itemConvert[index])

        const payload = {
          ...newFields,
          calculate: calculations.names as CalculateEnum[],
          fertilizing_objective_culture: fertilizingBuilding,
          ...(carbon_stock_density_soil && { carbon_stock_density_soil }),
        } as ICreateSample
        return payload
      },
    )

    await mutateOrderAsync({
      calculations,
    })

    const payload = dataVerifyExtractor(
      newData,
      samplesOrder.map((s) => s.description_cuture),
    )

    setSampleCreate(payload)
    setEmptySamplesOrder()
  }

  function handleSampleConfirmation(sampleName: string) {
    if (sampleConfirmation.includes(sampleName)) {
      setSampleConfirmation((state) => state.filter((s) => s !== sampleName))
    } else {
      setSampleConfirmation((state) => [...state, sampleName])
    }
  }

  function onRemoveConfirmation(sampleName: string) {
    setSampleConfirmation((state) => state.filter((s) => s !== sampleName))
  }

  useEffect(() => {
    if (!user && isDirty) {
      setOpenModalAccount(true)
    }
  }, [isDirty, user, setOpenModalAccount])

  // TODO: Gambiarra maluca para tirar o valos dos campos quando nao selecionados para preencher
  useEffect(() => {
    const { names, fertilizing } = calculations
    function isOffField(field: string) {
      return !names || !fertilizing.map((e) => e.value).includes(field)
    }
    if (isOffField(Fields.milho)) {
      setValue(
        `calculations.fertilizing_objective_culture_before_milho`,
        undefined,
      )
    }
    if (isOffField(Fields.canaDeAcucar)) {
      setValue(`calculations.p_k_for_expectation_cana_de_acucar`, undefined)
    }
    if (isOffField(Fields.abacaxi)) {
      setValue(`calculations.property_designation_abacaxi`, undefined)
    }
    if (isOffField(Fields.batata)) {
      setValue(`calculations.property_designation_batata`, undefined)
    }
    if (isOffField(Fields.maracuja)) {
      setValue(`calculations.property_designation_maracuja`, undefined)
    }
    if (isOffField(Fields.pepino)) {
      setValue(`calculations.property_designation_pepino`, undefined)
    }
    if (isOffField(Fields.alho)) {
      setValue(`calculations.property_designation_alho`, undefined)
    }
    if (isOffField(Fields.alho)) {
      setValue(`calculations.property_designation_alho`, undefined)
    }
    if (isOffField(Fields.tomate)) {
      setValue(`calculations.property_designation_tomate`, undefined)
    }

    // TODO: Limpar campo de estoque de carbono depois de usado para nova validacao
  }, [calculations, setValue])

  return (
    <SamplesContainer>
      {hasSamples && (
        <>
          <Form as="form" onSubmit={handleSubmit(handleRegister)}>
            {samplesOrder.map((sampleOrder, index) => {
              return (
                sampleOrder && (
                  <SampleOrderContainer
                    key={sampleOrder.description_cuture}
                    sampleOrder={sampleOrder}
                    index={index}
                    control={control}
                    isError={(errors.data && !!errors.data[index]) || false}
                    onSampleConfirmation={handleSampleConfirmation}
                    onRemoveConfirmation={onRemoveConfirmation}
                    isConfirmed={sampleConfirmation.includes(
                      sampleOrder.description_cuture,
                    )}
                    onConvertUnity={onConvertUnity}
                  />
                )
              )
            })}

            <div>
              <CalculateOptions control={control} />
            </div>

            <div>
              <Button size="lg" type="submit" disabled={isSubmitting}>
                CALCULAR
              </Button>
            </div>
          </Form>
        </>
      )}
    </SamplesContainer>
  )
}
