import { TextInput, TextInputProps, Text } from '@alosix-hub-ui/react'
import { useCallback, useState } from 'react'
import {
  ContainerSwap,
  ContentUnits,
  OptionsUnitsBox,
  SelectUnitBtn,
  SwitchUnitBtn,
  TextInputSwapUnitContainer,
} from './styles'
import { Swap } from 'phosphor-react'
import { PrinterUnit } from '@/components/PrinterUnit'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { IConvertKey, UnitType } from '../../../dtos/sample.dto'
import { UnitsEnum } from '@/enum'

interface TextInputSwapUnitProps extends TextInputProps {
  label: string
  unitsOptions: UnitsEnum[]
  unitCurrent?: string
  named: string
  onConvertUnity: (data: IConvertKey) => void
}

export function TextInputSwapUnit({
  label,
  unitCurrent,
  unitsOptions,
  named,
  onConvertUnity,
  ...props
}: TextInputSwapUnitProps) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(unitCurrent)

  const ref = useOutsideClick(() => {
    setOpen(false)
  })

  const handleSwitchUnit = useCallback(() => {
    if (!props.disabled) {
      setOpen(true)
    }
  }, [props.disabled])

  const handleSelectUnit = useCallback(
    (unit: UnitType) => {
      setOpen(false)
      setCurrent(unit)
      const item = {
        [named as string]: { unity: unit, value: 0 },
      }

      onConvertUnity(item)
    },
    [named, onConvertUnity],
  )

  return (
    <TextInputSwapUnitContainer>
      <Text as="span" size="sm">
        {label}
      </Text>

      <ContainerSwap ref={ref}>
        <ContentUnits>
          {open && (
            <OptionsUnitsBox>
              {unitsOptions.map((unit) => (
                <SelectUnitBtn
                  type="button"
                  key={unit}
                  onClick={() => handleSelectUnit(unit as UnitType)}
                >
                  <PrinterUnit unitName={unit} />
                </SelectUnitBtn>
              ))}
            </OptionsUnitsBox>
          )}

          <Text as="span" size="sm">
            <PrinterUnit unitName={String(current)} />
          </Text>

          <SwitchUnitBtn type="button" onClick={() => handleSwitchUnit()}>
            <Swap />
          </SwitchUnitBtn>
        </ContentUnits>

        <TextInput {...props} type="decimal" />
      </ContainerSwap>
    </TextInputSwapUnitContainer>
  )
}
