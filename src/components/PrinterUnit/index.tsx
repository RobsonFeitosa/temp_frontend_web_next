import { ReactElement, useMemo } from 'react'
import { Text } from '@alosix-hub-ui/react'
import { UnitContainer } from './styles'
import { UnitsEnum } from '@/enum'

interface PrinterUnitProps {
  unitName: string
}

export function PrinterUnit({ unitName }: PrinterUnitProps): ReactElement {
  const unit = useMemo(() => {
    const [top, bottom] = ['-0.05rem', '0.45rem']

    switch (unitName) {
      case UnitsEnum.cacl:
        return (
          <Text as="span">
            CaCI
            <Text as="small" css={{ '--position': bottom }}>
              c
            </Text>
          </Text>
        )
      case UnitsEnum.mgdm:
        return (
          <Text as="span">
            mg dm
            <Text as="small" css={{ '--position': top }}>
              -3
            </Text>
          </Text>
        )
      case UnitsEnum.gdm:
        return (
          <Text as="span">
            g dm
            <Text as="small" css={{ '--position': top }}>
              -3
            </Text>
          </Text>
        )
      case UnitsEnum.gkg:
        return (
          <Text as="span">
            g kg
            <Text as="small" css={{ '--position': top }}>
              -1
            </Text>
          </Text>
        )
      case UnitsEnum.porc:
        return <Text as="span">%</Text>
      case UnitsEnum.h2o:
        return (
          <Text as="span">
            K
            <Text className="omit" as="small" css={{ '--position': bottom }}>
              2
            </Text>
            O
          </Text>
        )
      case UnitsEnum.mmol:
        return (
          <Text as="span">
            mmol
            <Text as="small" css={{ '--position': bottom }}>
              c
            </Text>
            dm
            <Text as="small" css={{ '--position': top }}>
              -3
            </Text>
          </Text>
        )
      case UnitsEnum.cmol:
        return (
          <Text as="span">
            cmol
            <Text as="small" css={{ '--position': bottom }}>
              c
            </Text>
            dm
            <Text as="small" css={{ '--position': top }}>
              -3
            </Text>
          </Text>
        )
      case UnitsEnum.tha:
        return (
          <Text as="span">
            t ha
            <Text as="small" css={{ '--position': top }}>
              -1
            </Text>
          </Text>
        )
      case UnitsEnum.nha:
        return (
          <Text as="span">
            N ha
            <Text as="small" css={{ '--position': top }}>
              -1
            </Text>
          </Text>
        )
      case UnitsEnum.p2o5:
        return (
          <Text as="span">
            P
            <Text as="small" css={{ '--position': bottom }}>
              2
            </Text>
            O
            <Text as="small" css={{ '--position': bottom }}>
              5
            </Text>
          </Text>
        )
      case UnitsEnum.ha:
        return (
          <Text as="span">
            ha
            <Text as="small" css={{ '--position': top }}>
              -1
            </Text>
          </Text>
        )
      case UnitsEnum.ds:
        return (
          <Text as="span">
            Ds, g cm
            <Text as="small" css={{ '--position': top }}>
              -3
            </Text>
          </Text>
        )
      case UnitsEnum.kgkg:
        return (
          <Text as="span">
            kg kg
            <Text as="small" css={{ '--position': top }}>
              -1
            </Text>
          </Text>
        )
      default:
        return <Text as="span">not-found</Text>
    }
  }, [unitName])

  return <UnitContainer>{unit}</UnitContainer>
}
