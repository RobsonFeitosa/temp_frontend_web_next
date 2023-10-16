import { TextInputSwapUnit } from '../inputs/TextInputSwapUnit'
import { CalculatorConfig } from '../../config'
import { IConvertKey, ICreateSample } from '../../dtos/sample.dto'
import { Control, Controller } from 'react-hook-form'
import { buildNamedInput } from '../../utils/buildNamedInput'
import { Col, Row } from 'react-bootstrap'

interface FieldsRowAboutProps {
  index?: number
  sampleOrder?: ICreateSample
  control?: Control<any>
  isConfirmed?: boolean
  onConvertUnity: (data: IConvertKey) => void
}

export function FieldsRowTableOne({
  index,
  control,
  isConfirmed,
  onConvertUnity,
}: FieldsRowAboutProps) {
  const { sand, silt, clay, organicMatter, ph } =
    CalculatorConfig.fieldsOptUnits

  return (
    <div className="groupLabel">
      <Row>
        <Col xs="12" sm="4" md="4" lg="4">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_1_sand')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={sand[0]}
                    label="Areia"
                    placeholder="0"
                    type="number"
                    named="tb_1_sand"
                    unitsOptions={sand}
                    defaultValue={value}
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
        <Col xs="12" sm="4" md="4" lg="4">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_1_silt')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={silt[0]}
                    label="Silte"
                    placeholder="0"
                    named="tb_1_silt"
                    type="number"
                    unitsOptions={silt}
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
        <Col xs="12" sm="4" md="4" lg="4">
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_1_clay')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={clay[0]}
                    label="Argila"
                    placeholder="0"
                    type="number"
                    named="tb_1_clay"
                    unitsOptions={clay}
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
      </Row>
      <Row>
        <Col xs="12" sm md lg>
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_2_organic_matter')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={organicMatter[0]}
                    label="Matéria orgânica"
                    placeholder="0"
                    type="number"
                    named="tb_2_organic_matter"
                    unitsOptions={organicMatter}
                    defaultValue={value}
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
        <Col xs="12" sm md lg>
          <label>
            <Controller
              control={control}
              name={buildNamedInput(index, 'tb_2_ph')}
              render={({ field: { onChange, value } }) => {
                return (
                  <TextInputSwapUnit
                    unitCurrent={ph[0]}
                    label="pH"
                    placeholder="0"
                    type="number"
                    unitsOptions={ph}
                    onConvertUnity={onConvertUnity}
                    value={value}
                    named="tb_2_ph"
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
