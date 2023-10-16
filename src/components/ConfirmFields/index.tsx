import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

import {
  Container,
  Content,
  BoxConfirm,
  BtnConfirm,
  BtnConfirmField,
  BtnHiddenConfirmAll,
} from './styles'
import { renderUnity } from '@/renders/unity'
import { Button, Text } from '@alosix-hub-ui/react'
import { ICreateSample } from '@/pages/home/components/Calculator/dtos/sample.dto'
import { DialogCloseCustom } from '../DialogCloseCustom'

interface ISampleConfirmDTO
  extends Omit<
    ICreateSample,
    | 'tb_1_description_deep_culture'
    | 'user_id'
    | 'calculate'
    | 'description_cuture'
    | 'city'
    | 'uf'
    | 'carbon_stock_density_soil'
    | 'fertilizing_objective_culture'
  > {
  tb_1_description_deep_culture: {
    value: string
    confirmed?: boolean
  }
}

interface ConfirmFieldsProps {
  data: ICreateSample
  onConfirmFields: () => void
  onClose: () => void
  onCloseDialog: () => void
  // scrollFormTop?: () => void
}

export function ConfirmFields({
  data,
  onCloseDialog,
  onClose,
  onConfirmFields,
}: ConfirmFieldsProps) {
  const [dataRequest, setDataRequest] = useState<ISampleConfirmDTO>({
    tb_1_description_deep_culture: {
      value: data.tb_1_description_deep_culture,
    },
    tb_1_clay: data.tb_1_clay,
    tb_1_silt: data.tb_1_silt,
    tb_1_sand: data.tb_1_sand,
    tb_2_organic_matter: data.tb_2_organic_matter,
    tb_2_ph: data.tb_2_ph,
    tb_3_p_phosphor: data.tb_3_p_phosphor,
    tb_3_k_potassium: data.tb_3_k_potassium,
    tb_3_na_sodium: data.tb_3_na_sodium,
    tb_3_s_sulfur: data.tb_3_s_sulfur,
    tb_3_b_boron: data.tb_3_b_boron,
    tb_3_cu_copper: data.tb_3_cu_copper,
    tb_3_fe_iron: data.tb_3_fe_iron,
    tb_3_mn_manganese: data.tb_3_mn_manganese,
    tb_3_zn_zinc: data.tb_3_zn_zinc,
    tb_4_ca_calcium: data.tb_4_ca_calcium,
    tb_4_mg_magnesium: data.tb_4_mg_magnesium,
    tb_4_al_aluminum: data.tb_4_al_aluminum,
    tb_4_h_al_potential_acidity: data.tb_4_h_al_potential_acidity,
  })

  const {
    tb_1_description_deep_culture,
    tb_1_clay,
    tb_1_silt,
    tb_1_sand,
    tb_2_organic_matter,
    tb_2_ph,
    tb_3_p_phosphor,
    tb_3_k_potassium,
    tb_3_na_sodium,
    tb_3_s_sulfur,
    tb_3_b_boron,
    tb_3_cu_copper,
    tb_3_fe_iron,
    tb_3_mn_manganese,
    tb_3_zn_zinc,
    tb_4_ca_calcium,
    tb_4_mg_magnesium,
    tb_4_al_aluminum,
    tb_4_h_al_potential_acidity,
  } = dataRequest

  const handleConfirmated = (): void => {
    onConfirmFields()
    onCloseDialog()
  }

  const handleConfirmedField = (
    field: string,
    act: boolean | undefined,
  ): void => {
    const fieldSample = dataRequest[field as keyof ISampleConfirmDTO]
    const newField = {
      ...Object(fieldSample),
      confirmed: !act,
    }
    setDataRequest({ ...dataRequest, [field]: { ...newField } })
  }

  let totalRequest = 0

  Object.keys(dataRequest).forEach((key) => {
    const fieldSample = dataRequest[key as keyof ISampleConfirmDTO]
    if (Object(fieldSample).confirmed === false) {
      totalRequest += 1
    }
  })

  const isAllConfirmed = !totalRequest

  return (
    data && (
      <Container>
        <DialogCloseCustom onClose={onClose} />

        <Text>
          Cuidadosamente confirme todos os campos de entrada para calcular sua
          amostra, <br />
          depois de realizado não é possivel editar-lo.
        </Text>

        <BtnHiddenConfirmAll
          type="button"
          onClick={() => {
            onConfirmFields()
            onCloseDialog()
          }}
        >
          all
        </BtnHiddenConfirmAll>

        <Content>
          <BoxConfirm>
            <Text as="strong">
              Tabela 1 – Parâmetros físicos e químicos básicos
            </Text>
            <div>
              <BtnConfirmField
                onClick={() =>
                  handleConfirmedField(
                    'tb_1_description_deep_culture',
                    tb_1_description_deep_culture.confirmed,
                  )
                }
                confirmed={Boolean(tb_1_description_deep_culture.confirmed)}
              >
                <Text as="span">
                  Profundidade (cm) : {tb_1_description_deep_culture.value}
                </Text>
                {tb_1_description_deep_culture.confirmed && (
                  <FaCheckCircle size={16} />
                )}
              </BtnConfirmField>

              <BtnConfirmField
                onClick={() =>
                  handleConfirmedField('tb_1_sand', tb_1_sand.confirmed)
                }
                confirmed={Boolean(tb_1_sand.confirmed)}
              >
                <Text as="span">
                  Areia: {tb_1_sand.value} {renderUnity(tb_1_sand.unity)}{' '}
                </Text>
                {tb_1_sand.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_1_silt.confirmed)}
                onClick={() =>
                  handleConfirmedField('tb_1_silt', tb_1_silt.confirmed)
                }
              >
                <Text as="span">
                  Silte: {tb_1_silt.value} {renderUnity(tb_1_silt.unity)}{' '}
                </Text>
                {tb_1_silt.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_1_clay.confirmed)}
                onClick={() =>
                  handleConfirmedField('tb_1_clay', tb_1_clay.confirmed)
                }
              >
                <Text as="span">
                  Argila: {tb_1_clay.value} {renderUnity(tb_1_clay.unity)}{' '}
                </Text>
                {tb_1_clay.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_2_organic_matter.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_2_organic_matter',
                    tb_2_organic_matter.confirmed,
                  )
                }
              >
                <Text as="span">
                  Matéria orgânica: {tb_2_organic_matter.value}{' '}
                  {renderUnity(tb_2_organic_matter.unity)}{' '}
                </Text>
                {tb_2_organic_matter.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_2_ph.confirmed)}
                onClick={() =>
                  handleConfirmedField('tb_2_ph', tb_2_ph.confirmed)
                }
              >
                <Text as="span">
                  pH: {tb_2_ph.value} {renderUnity(tb_2_ph.unity)}{' '}
                </Text>
                {tb_2_ph.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
            </div>
          </BoxConfirm>
          <BoxConfirm>
            <Text as="strong">
              Tabela 2 - Parâmetros químicos nutricionais: macro e
              micronutrientes
            </Text>
            <div>
              <BtnConfirmField
                confirmed={Boolean(tb_3_p_phosphor.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_3_p_phosphor',
                    tb_3_p_phosphor.confirmed,
                  )
                }
              >
                <Text as="span">
                  P (Mehlich) - Fósforo: {tb_3_p_phosphor.value}{' '}
                  {renderUnity(tb_3_p_phosphor.unity)}{' '}
                </Text>
                {tb_3_p_phosphor.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_3_k_potassium.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_3_k_potassium',
                    tb_3_k_potassium.confirmed,
                  )
                }
              >
                <Text as="span">
                  K - Potássio: {tb_3_k_potassium.value}{' '}
                  {renderUnity(tb_3_k_potassium.unity)}{' '}
                </Text>
                {tb_3_k_potassium.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              {tb_3_na_sodium && (
                <BtnConfirmField
                  confirmed={Boolean(tb_3_na_sodium.confirmed)}
                  onClick={() =>
                    handleConfirmedField(
                      'tb_3_na_sodium',
                      tb_3_na_sodium.confirmed,
                    )
                  }
                >
                  <Text as="span">
                    Na - Sódio: {tb_3_na_sodium.value}{' '}
                    {renderUnity(tb_3_na_sodium.unity)}{' '}
                  </Text>
                  {tb_3_na_sodium.confirmed && <FaCheckCircle size={16} />}
                </BtnConfirmField>
              )}
              <BtnConfirmField
                confirmed={Boolean(tb_3_s_sulfur.confirmed)}
                onClick={() =>
                  handleConfirmedField('tb_3_s_sulfur', tb_3_s_sulfur.confirmed)
                }
              >
                <Text as="span">
                  S - Enxofre: {tb_3_s_sulfur.value}{' '}
                  {renderUnity(tb_3_s_sulfur.unity)}{' '}
                </Text>
                {tb_3_s_sulfur.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_3_b_boron.confirmed)}
                onClick={() =>
                  handleConfirmedField('tb_3_b_boron', tb_3_b_boron.confirmed)
                }
              >
                <Text as="span">
                  B - Boro: {tb_3_b_boron.value}{' '}
                  {renderUnity(tb_3_b_boron.unity)}{' '}
                </Text>
                {tb_3_b_boron.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_3_cu_copper.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_3_cu_copper',
                    tb_3_cu_copper.confirmed,
                  )
                }
              >
                <Text as="span">
                  Cu - Cobre: {tb_3_cu_copper.value}{' '}
                  {renderUnity(tb_3_cu_copper.unity)}{' '}
                </Text>
                {tb_3_cu_copper.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_3_fe_iron.confirmed)}
                onClick={() =>
                  handleConfirmedField('tb_3_fe_iron', tb_3_fe_iron.confirmed)
                }
              >
                <Text as="span">
                  Fe - Ferro: {tb_3_fe_iron.value}{' '}
                  {renderUnity(tb_3_fe_iron.unity)}{' '}
                </Text>
                {tb_3_fe_iron.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_3_mn_manganese.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_3_mn_manganese',
                    tb_3_mn_manganese.confirmed,
                  )
                }
              >
                <Text as="span">
                  Mn - Manganês: {tb_3_mn_manganese.value}{' '}
                  {renderUnity(tb_3_mn_manganese.unity)}{' '}
                </Text>
                {tb_3_mn_manganese.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_3_zn_zinc.confirmed)}
                onClick={() =>
                  handleConfirmedField('tb_3_zn_zinc', tb_3_zn_zinc.confirmed)
                }
              >
                <Text as="span">
                  Zn - Zinco: {tb_3_zn_zinc.value}{' '}
                  {renderUnity(tb_3_zn_zinc.unity)}{' '}
                </Text>
                {tb_3_zn_zinc.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_4_ca_calcium.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_4_ca_calcium',
                    tb_4_ca_calcium.confirmed,
                  )
                }
              >
                <Text as="span">
                  Ca - Cálcio: {tb_4_ca_calcium.value}{' '}
                  {renderUnity(tb_4_ca_calcium.unity)}{' '}
                </Text>
                {tb_4_ca_calcium.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_4_mg_magnesium.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_4_mg_magnesium',
                    tb_4_mg_magnesium.confirmed,
                  )
                }
              >
                <Text as="span">
                  Mg - Magnésio: {tb_4_mg_magnesium.value}{' '}
                  {renderUnity(tb_4_mg_magnesium.unity)}{' '}
                </Text>
                {tb_4_mg_magnesium.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_4_al_aluminum.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_4_al_aluminum',
                    tb_4_al_aluminum.confirmed,
                  )
                }
              >
                <Text as="span">
                  Al - Alumínio: {tb_4_al_aluminum.value}{' '}
                  {renderUnity(tb_4_al_aluminum.unity)}{' '}
                </Text>
                {tb_4_al_aluminum.confirmed && <FaCheckCircle size={16} />}
              </BtnConfirmField>
              <BtnConfirmField
                confirmed={Boolean(tb_4_h_al_potential_acidity.confirmed)}
                onClick={() =>
                  handleConfirmedField(
                    'tb_4_h_al_potential_acidity',
                    tb_4_h_al_potential_acidity.confirmed,
                  )
                }
              >
                <Text as="span">
                  H+Al - Acidez potencial: {tb_4_h_al_potential_acidity.value}{' '}
                  {renderUnity(tb_4_h_al_potential_acidity.unity)}{' '}
                </Text>
                {tb_4_h_al_potential_acidity.confirmed && (
                  <FaCheckCircle size={16} />
                )}
              </BtnConfirmField>
            </div>
          </BoxConfirm>
        </Content>
        {isAllConfirmed && (
          <BtnConfirm>
            <Button type="submit" onClick={() => handleConfirmated()}>
              EU CONFIRMO ESSAS INFORMAÇÕES!
            </Button>
          </BtnConfirm>
        )}
      </Container>
    )
  )
}
