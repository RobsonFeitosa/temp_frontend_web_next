import { Heading, Text } from '@alosix-hub-ui/react'
import { IConvertKey, ICreateSample } from '../../../dtos/sample.dto'
import { Actions } from '../Actions'
import { SampleContainer } from './styles'
import { FieldsRowAbout } from '../../FieldsRowAbout'
import { FieldsRowTableOne } from '../../FieldsRowTableOne'
import { FieldsRowTableTwo } from '../../FieldsRowTableTwo'
import { Control } from 'react-hook-form'

interface SampleOrderContainerProps {
  index: number
  sampleOrder: ICreateSample
  control: Control<any>
  isError: boolean
  isConfirmed: boolean
  onSampleConfirmation: (sampleName: string) => void
  onRemoveConfirmation: (sampleName: string) => void
  onConvertUnity: (data: IConvertKey) => void
}

export function SampleOrderContainer({
  index,
  sampleOrder,
  control,
  isError,
  isConfirmed,
  onConvertUnity,
  onSampleConfirmation,
  onRemoveConfirmation,
}: SampleOrderContainerProps) {
  return (
    <SampleContainer
      success={!isError}
      key={sampleOrder.description_cuture}
      isConfirmed={isConfirmed}
    >
      <Actions
        onSampleConfirmation={onSampleConfirmation}
        onRemoveConfirmation={onRemoveConfirmation}
        sampleOrder={sampleOrder}
        isError={isError}
      />

      <Text as="span">
        {index + 1} - Laudo {sampleOrder.description_cuture}{' '}
      </Text>

      <FieldsRowAbout
        index={index}
        control={control}
        isConfirmed={isConfirmed}
      />

      <div>
        <Heading as="h3">
          Tabela 1 – Parâmetros físicos e químicos básicos
        </Heading>

        <FieldsRowTableOne
          index={index}
          sampleOrder={sampleOrder}
          control={control}
          onConvertUnity={onConvertUnity}
          isConfirmed={isConfirmed}
        />
      </div>

      <div>
        <Heading as="h3">
          Tabela 2 - Parâmetros químicos nutricionais: macro e micronutrientes
        </Heading>

        <FieldsRowTableTwo
          index={index}
          control={control}
          onConvertUnity={onConvertUnity}
          isConfirmed={isConfirmed}
        />
      </div>
    </SampleContainer>
  )
}
