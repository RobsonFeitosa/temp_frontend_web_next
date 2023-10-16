import { useCallback, useEffect, useState } from 'react'
import { Button, Dialog, DialogRoot, Heading, Text } from '@alosix-hub-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { AiOutlineCheck } from 'react-icons/ai'
import { Container as Grid } from 'react-bootstrap'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldsRowAbout } from './components/FieldsRowAbout'
import { FieldsRowTableOne } from './components/FieldsRowTableOne'
import { FieldsRowTableTwo } from './components/FieldsRowTableTwo'
import { CalculateOptions } from './components/CalculateOptions'
import { UploadPdf } from './components/UploadPdf'
import { useOrder } from '@/hooks/providers/order'
import { ContentSamples } from './components/ContentSamples'
import { calculateSingleFormSchema } from './components/ContentSamples/schemas/calculateSingleFormSchema'
import { defaultValuesSample } from './components/ContentSamples/schemas/defaultValuesSample'
import buildFertilizingPayload from './utils/buildFertilizingPayload'
import { useCreateSamples } from './components/ContentSamples/hooks/useCreateSamples'
import { calculationsRefineSchema } from './components/ContentSamples/schemas/calculationsRefineSchema'
import { Report } from './Report'
import { IReportDTO } from './dtos/report.dto'
import { IConvertKey, ICreateSample } from './dtos/sample.dto'
import { CalculateEnum } from './enum/calculate.enum'
import { transformFormToUnits } from './utils/transformFormToUnits'
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md'
import { useCreateOrder } from './components/ContentSamples/hooks/useCreateOrder'
import { useAuth } from '@/hooks/providers/auth'
import { CollaboratorsList } from '../CollaboratorsList'

import {
  BtnDialogTrigger,
  ConfirmTruly,
  Container,
  Form,
  SwitcherInputBtn,
  SwitcherInputForm,
} from './styles'
import { ConfirmFields } from '@/components/ConfirmFields'

type DisplayLoad = 'single' | 'multiple'

const calculateFormSchemaInput = z.object({
  data: calculateSingleFormSchema,
  calculations: calculationsRefineSchema,
})

export type CalculatorFormDataSingleInput = z.infer<
  typeof calculateFormSchemaInput
>
export type CalculatorFormDataSingleOutput = z.output<
  typeof calculateFormSchemaInput
>

export default function Calculator() {
  const { user } = useAuth()

  const [reports, setReports] = useState<IReportDTO[]>([])
  const [displayLoad, setDisplayLoad] = useState<DisplayLoad>('single')
  const [isConfirmField, setIsConfirmField] = useState(false)
  const [openModalConfirm, setOpenModalConfirm] = useState(false)

  const [itemConvert, setItemConvert] = useState<ICreateSample>({
    tb_1_clay: {
      unity: 'gkg',
      value: 0,
    },
    tb_1_silt: {
      unity: 'gkg',
      value: 0,
    },
    tb_1_sand: {
      unity: 'gkg',
      value: 0,
    },
    tb_2_organic_matter: {
      unity: 'gdm',
      value: 0,
    },
    tb_2_ph: {
      unity: 'h2o',
      value: 0,
    },
    tb_3_p_phosphor: {
      unity: 'mgdm',
      value: 0,
    },
    tb_3_na_sodium: {
      unity: 'mgdm',
      value: 0,
    },
    tb_3_k_potassium: {
      unity: 'mgdm',
      value: 0,
    },
    tb_3_s_sulfur: {
      unity: 'mgdm',
      value: 0,
    },
    tb_3_b_boron: {
      unity: 'mgdm',
      value: 0,
    },
    tb_3_cu_copper: {
      unity: 'mgdm',
      value: 0,
    },
    tb_3_fe_iron: {
      unity: 'mgdm',
      value: 0,
    },
    tb_3_mn_manganese: {
      unity: 'mgdm',
      value: 0,
    },
    tb_3_zn_zinc: {
      unity: 'mgdm',
      value: 0,
    },
    tb_4_ca_calcium: {
      unity: 'cmol',
      value: 0,
    },
    tb_4_mg_magnesium: {
      unity: 'cmol',
      value: 0,
    },
    tb_4_al_aluminum: {
      unity: 'cmol',
      value: 0,
    },
    tb_4_h_al_potential_acidity: {
      unity: 'cmol',
      value: 0,
    },
  } as ICreateSample)

  const {
    setEmptySamplesOrder,
    samplesOrder,
    setEmptyOrder,
    addSamplesOrder,
    setSamplesOrderTotal,
    setEmptyCalculationOptions,
    setSampleMode,
    setOpenModalAccount,
    setSampleCreate,
    order: {
      sampleMode,
      samplesOrderTotal,
      samples,
      orders: { calculations },
      config: { paid },
    },
  } = useOrder()

  const { mutateAsync: mutateOrderAsync } = useCreateOrder()
  const { data: reportData, mutateAsync: mutateSamplesAsync } =
    useCreateSamples()

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, isDirty },
  } = useForm<CalculatorFormDataSingleInput>({
    resolver: zodResolver(calculateFormSchemaInput),
    defaultValues: {
      data: defaultValuesSample,
    },
  })

  const handleConvertUnity = useCallback(
    (data: IConvertKey) => {
      const key = Object.keys(data)[0]
      const { unity, value } = data[key]

      if (key === 'tb_1_clay' || key === 'tb_1_silt' || key === 'tb_1_sand') {
        setItemConvert((old) =>
          Object.keys(old).includes(key)
            ? {
                ...old,
                tb_1_clay: { value, unity },
                tb_1_silt: { value, unity },
                tb_1_sand: { value, unity },
              }
            : {
                ...itemConvert,
                tb_1_clay: { value, unity },
                tb_1_silt: { value, unity },
                tb_1_sand: { value, unity },
              },
        )
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

  async function handleRegister(data: CalculatorFormDataSingleOutput) {
    if (!user) {
      setOpenModalAccount(!user)
      return
    }

    const fertilizingBuilding = buildFertilizingPayload(data.calculations)

    const newFields = transformFormToUnits(data.data, itemConvert)

    addSamplesOrder(newFields)

    if (!isConfirmField) {
      setOpenModalConfirm(true)
      return
    }

    const newData: ICreateSample = {
      ...newFields,
      calculate: calculations.names as CalculateEnum[],
      fertilizing_objective_culture: fertilizingBuilding,
    } as ICreateSample

    await mutateOrderAsync({
      calculations,
    })

    setSampleCreate([newData])
  }

  const switcherLoadMode = useCallback(
    (name: DisplayLoad) => {
      setDisplayLoad(name)
      reset()
      setEmptyCalculationOptions()
      setSampleMode(name)
      registerSample([])
      setSamplesOrderTotal(1)
      setEmptySamplesOrder()
    },
    [
      reset,
      setEmptySamplesOrder,
      setEmptyCalculationOptions,
      setSampleMode,
      setSamplesOrderTotal,
    ],
  )

  function registerSample(repo: IReportDTO[]) {
    setReports(repo)
  }

  useEffect(() => {
    if (!user && isDirty) {
      setOpenModalAccount(true)
    }
  }, [isDirty, user, setOpenModalAccount])

  useEffect(() => {
    reportData && registerSample(reportData.data)
  }, [reportData])

  useEffect(() => {
    samples.length === 0 && samplesOrderTotal !== 0 && registerSample([])
  }, [samples, samplesOrderTotal])

  useEffect(() => {
    if (paid) {
      ;(async () => {
        await mutateSamplesAsync(samples)

        // setEmptyOrder()

        reset({
          data: {
            description_cuture: '',
          },
        })
        setIsConfirmField(false)
      })()
    }
  }, [paid, samples, reset, mutateSamplesAsync, setEmptyOrder])

  function onConfirmFields() {
    setIsConfirmField(true)
  }

  function onCloseDialog() {
    setOpenModalConfirm(false)
  }

  return (
    <>
      <DialogRoot open={openModalConfirm}>
        <Dialog title="Confirmar campos" offClosed>
          <ConfirmFields
            onClose={() => setOpenModalConfirm(false)}
            data={samplesOrder[0]}
            onConfirmFields={onConfirmFields}
            onCloseDialog={onCloseDialog}
          />
        </Dialog>
      </DialogRoot>
      <Grid>
        <Container>
          <Heading as="h1">CALCULADORA DA FERTILIDADE</Heading>

          <Text as="span">
            Calcule a necessidade de calcário e de gesso preenchendo
            cuidadosamente os campos abaixo. Atente-se às unidades de medida
            entre o formulário e o seu laudo.
          </Text>

          <SwitcherInputForm>
            <SwitcherInputBtn
              onClick={() => switcherLoadMode('single')}
              isCheck={displayLoad !== 'single'}
            >
              {displayLoad !== 'single' ? (
                <MdOutlineRadioButtonUnchecked />
              ) : (
                <MdOutlineRadioButtonChecked />
              )}
              <Text as="span">Preencher formulário</Text>
            </SwitcherInputBtn>
            <SwitcherInputBtn
              onClick={() => switcherLoadMode('multiple')}
              isCheck={displayLoad !== 'multiple'}
            >
              {displayLoad !== 'multiple' ? (
                <MdOutlineRadioButtonUnchecked />
              ) : (
                <MdOutlineRadioButtonChecked />
              )}
              <Text as="span">Carregar laudo de análises em PDF</Text>
            </SwitcherInputBtn>
          </SwitcherInputForm>

          <div style={{ display: displayLoad === 'single' ? 'none' : 'block' }}>
            <DialogRoot>
              <BtnDialogTrigger>Laudos em PDF identificados</BtnDialogTrigger>

              <Dialog title="Laudos em PDF identificados">
                <CollaboratorsList />
              </Dialog>
            </DialogRoot>

            <UploadPdf />
          </div>

          <div style={{ display: displayLoad === 'single' ? 'block' : 'none' }}>
            <Form as="form" onSubmit={handleSubmit(handleRegister)}>
              <FieldsRowAbout control={control} />

              <div>
                <Heading as="h3">
                  Tabela 1 – Parâmetros físicos e químicos básicos
                </Heading>
                <FieldsRowTableOne
                  control={control}
                  onConvertUnity={handleConvertUnity}
                />
              </div>

              <div>
                <Heading as="h3">
                  Tabela 2 - Parâmetros químicos nutricionais: macro e
                  micronutrientes
                </Heading>
                <FieldsRowTableTwo
                  control={control}
                  onConvertUnity={handleConvertUnity}
                />
              </div>

              <div>
                <CalculateOptions control={control} />
              </div>

              {isConfirmField && (
                <ConfirmTruly>
                  <AiOutlineCheck />
                  Eu concordo com os valores de entradas da amostra!
                </ConfirmTruly>
              )}
              <div>
                <Button size="lg" type="submit" disabled={isSubmitting}>
                  CALCULAR
                </Button>
              </div>
            </Form>
          </div>

          {samplesOrder.length > 0 && sampleMode === 'multiple' && (
            <ContentSamples />
          )}
        </Container>

        {reports.length > 0 && <Report reports={reports} />}
      </Grid>
    </>
  )
}
