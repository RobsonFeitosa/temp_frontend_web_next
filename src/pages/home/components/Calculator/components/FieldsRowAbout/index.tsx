import { SelectInput } from '../inputs/SelectInput'
import { Text, TextInput } from '@alosix-hub-ui/react'
import { DeepCultureOptions } from '@/mockStatic'
import { FaLeaf } from 'react-icons/fa'
import { useGetAllStates } from '@/hooks/useGetAllStates'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useGetAllCityByState } from '@/hooks/useGetAllCityByState'
import { slugfy } from '@/utils/slug'
import { Control, Controller } from 'react-hook-form'
import { buildNamedInput } from '../../utils/buildNamedInput'
import { Col, Row } from 'react-bootstrap'
import { Container } from './styles'

interface FieldsRowAboutProps {
  index?: number
  control?: Control<any>
  isConfirmed?: boolean
}

export function FieldsRowAbout({
  index,
  control,
  isConfirmed,
}: FieldsRowAboutProps) {
  const [stateCurrent, setStateCurrent] = useState('')

  const { data: stateFound, refetch: getAllStates } = useGetAllStates()

  useEffect(() => {
    getAllStates()
  }, [getAllStates])

  const stateOptions = useMemo(() => {
    const states = stateFound?.data || []

    return states.map((state) => ({
      label: state.nome,
      value: state.sigla,
    }))
  }, [stateFound])

  const handleState = useCallback((value: string | undefined) => {
    value && setStateCurrent(value)
  }, [])

  const { data: citiesFound, refetch: getAllCities } =
    useGetAllCityByState(stateCurrent)

  useEffect(() => {
    if (stateCurrent) {
      getAllCities()
    }
  }, [stateCurrent, getAllCities])

  const citiesOptions = useMemo(() => {
    const cities = citiesFound?.data || []

    return cities.map((city) => ({
      label: city.nome,
      value: slugfy(city.nome),
    }))
  }, [citiesFound])

  return (
    <Container>
      <div className="groupLabel">
        <Row>
          <Col xs="12" sm="12" md="12" lg="3">
            <label>
              <Text as="span" size="sm">
                Plantas de coberturas
              </Text>
              <Controller
                control={control}
                name={buildNamedInput(index, 'description_cuture')}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <TextInput
                      placeholder="Insira uma cultura"
                      startIcon={FaLeaf}
                      defaultValue={value}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                      error={error ? 'Campo obrigatório' : undefined}
                      disabled={isConfirmed}
                    />
                  )
                }}
              />
            </label>
          </Col>
          <Col xs="12" sm="5" md="5" lg="3">
            <label>
              <Controller
                control={control}
                name={buildNamedInput(index, 'tb_1_description_deep_culture')}
                render={({
                  field: { onChange, name, value },
                  fieldState: { error },
                }) => {
                  return (
                    <SelectInput
                      options={DeepCultureOptions}
                      label="Profundidade (cm)"
                      placeholder="Profundidade"
                      onChange={(data) => onChange(data.value)}
                      name={name}
                      error={error && !value ? 'Campo obrigatório' : undefined}
                      disabled={isConfirmed}
                    />
                  )
                }}
              />
            </label>
          </Col>
          <Col xs="12" sm="3" md="3" lg="3">
            <label>
              <Controller
                control={control}
                name={buildNamedInput(index, 'uf')}
                render={({
                  field: { onChange, name, value },
                  fieldState: { error },
                }) => {
                  return (
                    <SelectInput
                      options={stateOptions}
                      label="UF"
                      placeholder="Estado"
                      defaultValue={{
                        label: value,
                        value,
                      }}
                      onChange={(data) => {
                        handleState(data.value)
                        onChange(data.value)
                      }}
                      error={error ? 'Campo obrigatório' : undefined}
                      name={name}
                      disabled={isConfirmed}
                    />
                  )
                }}
              />
            </label>
          </Col>
          <Col xs="12" sm="4" md="4" lg="3">
            <label>
              <Controller
                control={control}
                name={buildNamedInput(index, 'city')}
                render={({
                  field: { onChange, name, value },
                  fieldState: { error },
                }) => {
                  return (
                    <SelectInput
                      options={citiesOptions}
                      label="Cidade"
                      placeholder="Cidade"
                      defaultValue={
                        value
                          ? {
                              label: String(value),
                              value: String(value),
                            }
                          : undefined
                      }
                      onChange={(data) => onChange(data.value)}
                      error={error ? 'Campo obrigatório' : undefined}
                      name={name}
                      disabled={isConfirmed}
                    />
                  )
                }}
              />
            </label>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
