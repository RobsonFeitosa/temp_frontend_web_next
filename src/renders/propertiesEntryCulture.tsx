import React from 'react'
import { renderUnity } from './unity'
import { Fields } from '@/pages/home/components/Calculator/components/CalculateOptions/OptionsFields/config'
import { renderSymbolsTextComparation } from './symbolsText'
import { Text } from '@alosix-hub-ui/react'
import { ICultureObjective } from '@/pages/home/components/Calculator/dtos/report.dto'

interface IRequest {
  culture: string
  type: string
  fertilizing_objective_culture: ICultureObjective[]
}

interface ICultureAndFertilizing {
  culture: string
  fertilizing_objective_culture: ICultureObjective[]
}

const propertiesEntryNitrogen = ({
  culture,
  fertilizing_objective_culture,
}: ICultureAndFertilizing): any => {
  switch (culture) {
    case Fields.milho:
      return (
        <>
          <Text>
            Cultura anterior:{' '}
            <Text as="strong">
              {' '}
              {
                fertilizing_objective_culture.find((p) => p.culture === culture)
                  ?.culture_before
              }
            </Text>
          </Text>
        </>
      )

    case Fields.alho:
      return (
        <>
          <Text>
            Expectativa de rendimento:{' '}
            <Text as="strong">
              {' '}
              {
                fertilizing_objective_culture.find((p) => p.culture === culture)
                  ?.property_designation
              }
            </Text>{' '}
            ({renderUnity('tha')})
          </Text>
        </>
      )

    case Fields.pepino:
      return (
        <>
          <Text>
            Produto:{' '}
            <Text as="strong">
              {' '}
              {
                fertilizing_objective_culture.find((p) => p.culture === culture)
                  ?.property_designation
              }
            </Text>{' '}
          </Text>
        </>
      )

    case Fields.tomate:
      return (
        <>
          <Text>
            Expectativa de rendimento:{' '}
            <Text as="strong">
              {' '}
              {
                fertilizing_objective_culture.find((p) => p.culture === culture)
                  ?.property_designation
              }
            </Text>{' '}
            ({renderUnity('tha')})
          </Text>
        </>
      )

    case Fields.batata:
      return (
        <>
          <Text>
            Expectativa de rendimento:{' '}
            <Text as="strong">
              {' '}
              {renderSymbolsTextComparation(
                fertilizing_objective_culture.find((p) => p.culture === culture)
                  ?.property_designation || '',
              )}
            </Text>{' '}
            ({renderUnity('tha')})
          </Text>
        </>
      )

    case Fields.abacaxi:
      return (
        <>
          <Text>
            Safra selecionada:{' '}
            <Text as="strong">
              {' '}
              {
                fertilizing_objective_culture.find((p) => p.culture === culture)
                  ?.property_designation
              }
            </Text>{' '}
          </Text>
        </>
      )

    case Fields.maracuja:
      return (
        <>
          <Text>
            Ano selecionado:{' '}
            <Text as="strong">
              {' '}
              {
                fertilizing_objective_culture.find((p) => p.culture === culture)
                  ?.property_designation
              }
            </Text>{' '}
          </Text>
        </>
      )

    default:
  }
}

const renderPropertiesEntryCulturePhosphorPotassium = ({
  culture,
  fertilizing_objective_culture,
}: ICultureAndFertilizing) => {
  return (
    Fields.canaDeAcucar === culture && (
      <Text>
        Expectativa de rendimento:{' '}
        <Text as="strong">
          {' '}
          {renderSymbolsTextComparation(
            fertilizing_objective_culture.find((p) => p.culture === culture)
              ?.p_k_for_expectation || '',
          )}
        </Text>{' '}
        ({renderUnity('tha')})
      </Text>
    )
  )
}

export const renderPropertiesEntryCulture = ({
  culture,
  type,
  fertilizing_objective_culture,
}: IRequest) => {
  switch (type) {
    case 'nitrogen':
      return propertiesEntryNitrogen({
        culture,
        fertilizing_objective_culture,
      })
    case 'phosphor-potassium':
      return renderPropertiesEntryCulturePhosphorPotassium({
        culture,
        fertilizing_objective_culture,
      })
    default:
  }
}
