import { TextInputSwapUnit } from '../inputs/TextInputSwapUnit'
import { CalculatorConfig } from '../../config'
import { Control, Controller } from 'react-hook-form'
import { buildNamedInput } from '../../utils/buildNamedInput'
import { Col, Row } from 'react-bootstrap'
import { IConvertKey } from '../../dtos/sample.dto'

interface FieldsRowAboutProps {
  index?: number
  control?: Control<any>
  isConfirmed?: boolean
  onConvertUnity: (data: IConvertKey) => void
}

export function FieldsRowTableTwo({
  index,
  control,
  isConfirmed,
  onConvertUnity,
}: FieldsRowAboutProps) {
  const {
    pPhosphor,
    kPotassium,
    naSodium,
    sSulfur,
    bBoron,
    cuCopper,
    feIron,
    mnManganese,
    znZinc,
    caCalcium,
    mgMagnesium,
    alAluminum,
    HAlPotentialAcidity,
  } = CalculatorConfig.fieldsOptUnits

  return (
    <div className="groupLabel">
      <Row>
        <Col xs="12" sm="6" md="6" lg="3">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_p_phosphor')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={pPhosphor[2]}
                    label="P (Mehlich) - Fósforo"
                    placeholder="0"
                    unitsOptions={pPhosphor}
                    onConvertUnity={onConvertUnity}
                    type="number"
                    named="tb_3_p_phosphor"
                    defaultValue={value}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col xs="12" sm="6" md="6" lg="3">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_k_potassium')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={kPotassium[2]}
                    label="K - Potássio"
                    placeholder="0"
                    type="number"
                    unitsOptions={kPotassium}
                    defaultValue={value}
                    named="tb_3_k_potassium"
                    onConvertUnity={onConvertUnity}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col xs="12" lg="3">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_na_sodium')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={naSodium[1]}
                    label="Na - Sódio"
                    placeholder="0"
                    type="number"
                    unitsOptions={naSodium}
                    named="tb_3_na_sodium"
                    onConvertUnity={onConvertUnity}
                    defaultValue={value}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col xs="12" lg="3">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_s_sulfur')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={sSulfur[2]}
                    label="S - Enxofre"
                    placeholder="0"
                    type="number"
                    unitsOptions={sSulfur}
                    defaultValue={value}
                    named="tb_3_s_sulfur"
                    value={value}
                    onConvertUnity={onConvertUnity}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col sm="12" xs="12" md="4" lg>
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_b_boron')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={bBoron[2]}
                    label="B - Boro"
                    placeholder="0"
                    type="number"
                    unitsOptions={bBoron}
                    defaultValue={value}
                    named="tb_3_b_boron"
                    onConvertUnity={onConvertUnity}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col sm="12" xs="12" md="4" lg>
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_cu_copper')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={cuCopper[2]}
                    label="Cu - Cobre"
                    placeholder="0"
                    type="number"
                    unitsOptions={cuCopper}
                    onConvertUnity={onConvertUnity}
                    defaultValue={value}
                    named="tb_3_cu_copper"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col sm="12" xs="12" md="4" lg>
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_fe_iron')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={feIron[2]}
                    label="Fe - Ferro"
                    placeholder="0"
                    type="number"
                    unitsOptions={feIron}
                    onConvertUnity={onConvertUnity}
                    defaultValue={value}
                    named="tb_3_fe_iron"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col sm="12" md="6" lg>
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_mn_manganese')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={mnManganese[2]}
                    label="Mn - Manganês"
                    placeholder="0"
                    type="number"
                    unitsOptions={mnManganese}
                    defaultValue={value}
                    onConvertUnity={onConvertUnity}
                    value={value}
                    named="tb_3_mn_manganese"
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col xs="12" sm="12" md="6" lg>
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_3_zn_zinc')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={znZinc[2]}
                    label="Zn - Zinco"
                    placeholder="0"
                    type="number"
                    unitsOptions={znZinc}
                    defaultValue={value}
                    onConvertUnity={onConvertUnity}
                    named="tb_3_zn_zinc"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="6" lg="3">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_4_ca_calcium')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={caCalcium[1]}
                    label="Ca - Cálcio"
                    placeholder="0"
                    type="number"
                    unitsOptions={caCalcium}
                    onConvertUnity={onConvertUnity}
                    defaultValue={value}
                    named="tb_4_ca_calcium"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col xs="12" sm="6" md="6" lg="3">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_4_mg_magnesium')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={mgMagnesium[1]}
                    label="Mg - Magnésio"
                    placeholder="0"
                    type="number"
                    unitsOptions={mgMagnesium}
                    defaultValue={value}
                    named="tb_4_mg_magnesium"
                    onConvertUnity={onConvertUnity}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col xs="12" sm="6" md="6" lg="3">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_4_al_aluminum')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={alAluminum[1]}
                    label="Al - Alumínio"
                    placeholder="0"
                    type="number"
                    unitsOptions={alAluminum}
                    defaultValue={value}
                    onConvertUnity={onConvertUnity}
                    named="tb_4_al_aluminum"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
        <Col xs="12" sm="6" md="6" lg="3">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_4_h_al_potential_acidity')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={HAlPotentialAcidity[1]}
                    label="H+Al - Acidez potencial"
                    placeholder="0"
                    type="number"
                    onConvertUnity={onConvertUnity}
                    unitsOptions={HAlPotentialAcidity}
                    value={value}
                    named="tb_4_h_al_potential_acidity"
                    defaultValue={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={isConfirmed}
                  />
                )
              }}
            />
          </label>
        </Col>
      </Row>
    </div>
  )
}
