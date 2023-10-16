import { useOrder } from '@/hooks/providers/order'
import { useMemo } from 'react'
import { Fields, FieldsValuesOptions, fieldsOptionsAdvanced } from '../config'
import { Text } from '@alosix-hub-ui/react'
import { FieldSetContainer, MoreFieldsContainer } from './styles'
import { Control, Controller } from 'react-hook-form'
import { SelectInput } from '../../../inputs/SelectInput'
import { renderUnity } from '@/renders/unity'
import { GridRow } from '@/components/GridRow'

interface MoreFieldsCulturesProps {
  control: Control<any>
}

export function MoreFieldsCultures({ control }: MoreFieldsCulturesProps) {
  const {
    order: { orders },
  } = useOrder()

  const culturesTarget = orders.calculations.names
  const cultures = orders.calculations.fertilizing

  const isEmptyCulturesObjective =
    cultures.filter((culture) =>
      fieldsOptionsAdvanced.includes(culture.value || ''),
    ).length === 0

  const isOnCultureObjective = culturesTarget.includes('fertilizing')

  const renderMoreField = useMemo(() => {
    return cultures.map((item) => {
      const culture = item.value
      switch (culture) {
        case Fields.milho:
          return (
            <FieldSetContainer key={culture}>
              <Text size="sm">{culture}</Text>

              <div>
                <Text size="sm" as="span">
                  Selecione a cultura anterior
                </Text>

                <Controller
                  control={control}
                  name="calculations.fertilizing_objective_culture_before_milho"
                  render={({
                    field: { onChange, name, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectInput
                        placeholder="Cultura anterior a milho"
                        name={name}
                        defaultValue={{
                          label: value,
                          value,
                        }}
                        options={FieldsValuesOptions.milho}
                        error={error ? 'Campo obrigatório' : undefined}
                        onChange={(data) => onChange(data.value)}
                      />
                    )
                  }}
                />
              </div>
            </FieldSetContainer>
          )

        case Fields.tomate:
          return (
            <FieldSetContainer key={culture}>
              <Text size="sm">{culture}</Text>

              <div>
                <Text size="sm" as="span">
                  Selecione a expectativa de rendimento - ({renderUnity('tha')})
                </Text>
                <Controller
                  control={control}
                  name="calculations.property_designation_tomate"
                  render={({
                    field: { onChange, name, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectInput
                        options={
                          FieldsValuesOptions.tomate.property_designation
                        }
                        name={name}
                        defaultValue={{
                          label: value,
                          value,
                        }}
                        placeholder="Expectativa"
                        error={error ? 'Campo obrigatório' : undefined}
                        onChange={(data) => {
                          onChange(data.value)
                        }}
                      />
                    )
                  }}
                />
              </div>
            </FieldSetContainer>
          )

        case Fields.alho:
          return (
            <FieldSetContainer key={culture}>
              <Text size="sm">{culture}</Text>

              <div>
                <Text size="sm" as="span">
                  Selecione a expectativa de rendimento de bulbo curado - (
                  {renderUnity('tha')})
                </Text>
                <Controller
                  control={control}
                  name="calculations.property_designation_alho"
                  render={({
                    field: { onChange, name, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectInput
                        options={FieldsValuesOptions.alho.property_designation}
                        name={name}
                        placeholder="Expectativa"
                        defaultValue={{
                          label: value,
                          value,
                        }}
                        error={error ? 'Campo obrigatório' : undefined}
                        onChange={(data) => {
                          onChange(data.value)
                        }}
                      />
                    )
                  }}
                />
              </div>
            </FieldSetContainer>
          )
        case Fields.pepino:
          return (
            <FieldSetContainer key={culture}>
              <Text size="sm">{culture}</Text>

              <div>
                <Text size="sm" as="span">
                  Selecione o produto
                </Text>

                <Controller
                  control={control}
                  name="calculations.property_designation_pepino"
                  render={({
                    field: { onChange, name, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectInput
                        options={
                          FieldsValuesOptions.pepino.property_designation
                        }
                        name={name}
                        defaultValue={{
                          label: value,
                          value,
                        }}
                        placeholder="Expectativa"
                        error={error ? 'Campo obrigatório' : undefined}
                        onChange={(data) => {
                          onChange(data.value)
                        }}
                      />
                    )
                  }}
                />
              </div>
            </FieldSetContainer>
          )
        case Fields.maracuja:
          return (
            <FieldSetContainer key={culture}>
              <Text size="sm">{culture}</Text>

              <div>
                <Text size="sm" as="span">
                  Selecione a safra:
                </Text>

                <Controller
                  control={control}
                  name="calculations.property_designation_maracuja"
                  render={({
                    field: { onChange, name, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectInput
                        placeholder="Maracuja"
                        options={
                          FieldsValuesOptions.maracuja.property_designation
                        }
                        defaultValue={{
                          label: value,
                          value,
                        }}
                        name={name}
                        error={error ? 'Campo obrigatório' : undefined}
                        onChange={(data) => {
                          onChange(data.value)
                        }}
                      />
                    )
                  }}
                />
              </div>
            </FieldSetContainer>
          )
        case Fields.batata:
          return (
            <FieldSetContainer key={culture}>
              <Text size="sm">{culture}</Text>

              <div>
                <Text size="sm" as="span">
                  Selecione a expectativa de rendimento - ({renderUnity('tha')})
                </Text>

                <Controller
                  control={control}
                  name="calculations.property_designation_batata"
                  render={({
                    field: { onChange, name, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectInput
                        options={
                          FieldsValuesOptions.batata.property_designation
                        }
                        defaultValue={{
                          label: value,
                          value,
                        }}
                        name={name}
                        placeholder="Expectativa"
                        error={error ? 'Campo obrigatório' : undefined}
                        onChange={(data) => {
                          onChange(data.value)
                        }}
                      />
                    )
                  }}
                />
              </div>
            </FieldSetContainer>
          )
        case Fields.canaDeAcucar:
          return (
            <FieldSetContainer key={culture}>
              <Text size="sm">{culture}</Text>

              <div>
                <Text size="sm" as="span">
                  Selecione as expectativas de rendimento - (
                  {renderUnity('tha')})
                </Text>
                <Controller
                  control={control}
                  name="calculations.p_k_for_expectation_cana_de_acucar"
                  render={({
                    field: { onChange, name, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectInput
                        options={
                          FieldsValuesOptions.canaDeAcucar.p_k_for_expectation
                        }
                        placeholder="Expectativa"
                        name={name}
                        defaultValue={{
                          label: value,
                          value,
                        }}
                        error={error ? 'Campo obrigatório' : undefined}
                        onChange={(data) => {
                          onChange(data.value)
                        }}
                      />
                    )
                  }}
                />
              </div>
            </FieldSetContainer>
          )
        case Fields.abacaxi:
          return (
            <FieldSetContainer key={culture}>
              <Text size="sm">{culture}</Text>

              <div>
                <Text size="sm" as="span">
                  Selecione a safra:
                </Text>

                <Controller
                  control={control}
                  name="calculations.property_designation_abacaxi"
                  render={({
                    field: { onChange, name, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <SelectInput
                        options={
                          FieldsValuesOptions.abacaxi.property_designation
                        }
                        name={name}
                        defaultValue={{
                          label: value,
                          value,
                        }}
                        placeholder="Expectativa"
                        error={error ? 'Campo obrigatório' : undefined}
                        onChange={(data) => {
                          onChange(data.value)
                        }}
                      />
                    )
                  }}
                />
              </div>
            </FieldSetContainer>
          )
        default:
      }

      return false
    })
  }, [cultures, control])

  return (
    !isEmptyCulturesObjective &&
    isOnCultureObjective && (
      <MoreFieldsContainer>
        <GridRow rows={2}>
          <>{renderMoreField}</>
        </GridRow>
      </MoreFieldsContainer>
    )
  )
}
