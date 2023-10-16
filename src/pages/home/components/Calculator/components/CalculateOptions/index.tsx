import { Checkbox, Heading, Text } from '@alosix-hub-ui/react'
import { OptionContainer, OptionContent, OptionsContainer } from './styles'
import { calculateOptions } from '@/config/calculateOptions'
import { useCallback } from 'react'
import { useOrder } from '@/hooks/providers/order'
import { OptionsFields } from './OptionsFields'
import { Control, Controller } from 'react-hook-form'

interface CalculateOptionsProps {
  control: Control<any>
}

export function CalculateOptions({ control }: CalculateOptionsProps) {
  const {
    addCalculateOptions,
    order: {
      orders: { calculations },
    },
  } = useOrder()

  const handleCalculateOptions = useCallback(
    (type: string) => {
      addCalculateOptions({ name: type, type: 'calculation' })
    },
    [addCalculateOptions],
  )

  const isMoreFields = useCallback(
    (index: number, type: string) => {
      const exceptions = [0, 1, 2]
      return !exceptions.includes(index) && calculations.names.includes(type)
    },
    [calculations],
  )

  function isCalculationChecked(type: string) {
    return calculations.names.includes(type)
  }

  return (
    <OptionsContainer>
      <Heading as="h4">Escolha suas opções de cálculo</Heading>

      <OptionContent>
        <Checkbox id={calculateOptions[0].type} checked />

        <Text as="span" size="sm">
          {calculateOptions[0].name}
        </Text>
      </OptionContent>

      {calculateOptions.map(
        (option, index) =>
          index !== 0 && (
            <OptionContainer key={option.name}>
              <OptionContent key={option.name}>
                <Controller
                  control={control}
                  name={`calculations.is_${option.type}_fertilizing`}
                  render={({ field: { onChange, ref } }) => {
                    return (
                      <Checkbox
                        id={option.type}
                        onCheckedChange={(checked) => {
                          handleCalculateOptions(option.type)
                          onChange(checked)
                        }}
                        checked={isCalculationChecked(option.type)}
                        ref={ref}
                      />
                    )
                  }}
                />

                <Text as="span" size="sm">
                  {option.name}
                </Text>
              </OptionContent>

              {calculations.names.includes(option.type) &&
                isMoreFields(index, option.type) && (
                  <OptionsFields type={option.type} control={control} />
                )}
            </OptionContainer>
          ),
      )}
    </OptionsContainer>
  )
}
