import { calculateOptions } from '@/config/calculateOptions'
import { FieldBox, FieldContainer, OptionsFieldsContainer } from './styles'
import { useCallback, useMemo } from 'react'
import { Text } from '@alosix-hub-ui/react'
import { OptionsDensidadeSolo, optionsCulture } from './config'
import { Option } from '@/dtos'
import { useOrder } from '@/hooks/providers/order'
import { MoreFieldsCultures } from './MoreFieldsCultures'
import { Control, Controller } from 'react-hook-form'
import { SelectInput } from '../../inputs/SelectInput'

interface OptionsFieldsProps {
  type: string
  control: Control<any>
}
export function OptionsFields({ type, control }: OptionsFieldsProps) {
  const { addCalculateOptions } = useOrder()

  const handleCultureObjective = useCallback(
    (opts: unknown) => {
      const options = opts as Option[]
      if (!options) return

      const culturesSelected = options.map((opt) => opt.label)

      addCalculateOptions({
        name: '',
        values: culturesSelected,
        type: 'fertilizing',
      })
    },
    [addCalculateOptions],
  )

  const handleCarbonStock = useCallback(
    (opt: any) => {
      if (opt) {
        addCalculateOptions({
          name: opt.value,
          value: opt.label,
          type: 'carbon_stock',
        })
      }
    },
    [addCalculateOptions],
  )

  const optionCalculate = useMemo(() => {
    switch (type) {
      case calculateOptions[3].type:
        return (
          <FieldContainer>
            <FieldBox>
              <Text size="sm" as="span">
                objetivo
              </Text>

              <Controller
                control={control}
                name={'calculations.fertilizing_objective_culture'}
                render={({
                  field: { onChange, name, value },
                  fieldState: { error },
                }) => {
                  return (
                    <SelectInput
                      placeholder="Cultura objetivo"
                      error={error ? 'Campo obrigatório' : undefined}
                      name={name}
                      defaultValue={value}
                      // disabled={isConfirmed}
                      options={optionsCulture}
                      isMulti
                      closeMenuOnSelect={false}
                      onChange={(data) => {
                        handleCultureObjective(data)
                        onChange(data)
                      }}
                    />
                  )
                }}
              />
            </FieldBox>

            <MoreFieldsCultures control={control} />
          </FieldContainer>
        )
      case calculateOptions[4].type:
        return (
          <FieldContainer>
            <FieldBox>
              <Text size="sm">
                Faixa de densidade do solo
                {/* ({renderUnity('ds')}) */}
              </Text>

              <Controller
                control={control}
                name={'calculations.carbon_stock_density_soil'}
                render={({
                  field: { onChange, name },
                  fieldState: { error },
                }) => {
                  return (
                    <SelectInput
                      placeholder="Selecione a densidade"
                      error={error ? 'Campo obrigatório' : undefined}
                      name={name}
                      // disabled={isConfirmed}
                      options={OptionsDensidadeSolo}
                      onChange={(data) => {
                        handleCarbonStock(data)
                        onChange(data.value)
                      }}
                    />
                  )
                }}
              />
            </FieldBox>
          </FieldContainer>
        )
      default:
    }
  }, [type, handleCultureObjective, handleCarbonStock, control])

  return <OptionsFieldsContainer>{optionCalculate}</OptionsFieldsContainer>
}
