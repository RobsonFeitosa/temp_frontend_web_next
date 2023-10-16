import { Heading, Text } from '@alosix-hub-ui/react'
import {
  GroupResponse,
  HeaderSingle,
  Hr,
  Indent,
  Infor,
  ReportItem,
  ReportItemBody,
  ReportItemResponse,
  ReportSingleContainer,
  Table,
  Title,
  Wrapper,
} from './styles'
import { ICalculatorFertilizingDTO, IReportDTO } from '../../dtos/report.dto'
import formatDate from '@/utils/formatDate'
import { FiChevronRight } from 'react-icons/fi'
import { renderUnity } from '@/renders/unity'
import { renderPropertiesEntryCulture } from '@/renders/propertiesEntryCulture'
import {
  renderTextCalagem,
  renderTextFosforoPotassio,
  renderTextNitrogenio,
  renderThaExpec,
} from '@/renders/fertilizingReport'
import { Share } from '../Share'
import Link from 'next/link'

interface ReportSingleProps {
  report: IReportDTO
  index?: number
}

export default function ReportSingle({
  report,
  index = undefined,
}: ReportSingleProps) {
  const isMult = index !== undefined

  return (
    <ReportSingleContainer key={report.id}>
      {!isMult && (
        <HeaderSingle>
          <Text as="span">N.A: {report.id.slice(0, 11)}</Text>

          <Link href="/dashboard">[ todas as amostras ]</Link>
        </HeaderSingle>
      )}

      <Title>
        {isMult && <Text as="h3">{index + 1}ª Amostra</Text>}

        <div>
          <Text as="span">
            Plantas de cobertura: {report.description_cuture}
          </Text>
          <Text as="span">
            Profundidade (cm):{' '}
            {report.data_sample.tb_1_description_deep_culture}
          </Text>
          <Text as="span">
            Região: {report.city}-{report.uf}
          </Text>
          <Text as="span">
            Analisado:{' '}
            {formatDate({
              date: report.created_at,
              hoursView: true,
            })}{' '}
            h
          </Text>
        </div>
      </Title>

      <Wrapper>
        <Heading as="h4">
          <FiChevronRight size={18} />
          Interpretação da Tabela
        </Heading>

        <Indent>
          <ReportItem>
            <Heading as="h5">
              Tabela 1 - Parâmetros físicos e químicos básicos
            </Heading>

            <ReportItemBody>
              <Text as="span">
                Areia: {report.data_sample.tb_1_sand.value} (
                {renderUnity(report.data_sample.tb_1_sand.unity)})
              </Text>
              <Text as="span">
                Silte: {report.data_sample.tb_1_silt.value} (
                {renderUnity(report.data_sample.tb_1_silt.unity)})
              </Text>
              <Text as="span">
                Argila: {report.data_sample.tb_1_clay.value} (
                {renderUnity(report.data_sample.tb_1_clay.unity)})
              </Text>

              <Text as="span">
                Matéria orgânica: {report.data_sample.tb_2_organic_matter.value}{' '}
                ({renderUnity(report.data_sample.tb_2_organic_matter.unity)})
              </Text>
              <Text as="span">
                pH: {report.data_sample.tb_2_ph.value} (
                {renderUnity(report.data_sample.tb_2_ph.unity)})
              </Text>
            </ReportItemBody>

            <ReportItemResponse>
              <Text as="span">
                O valor de pH é considerado{' '}
                <Text as="strong">{report.interpretation_?.inter_tb_2_ph}</Text>{' '}
                {report.data_sample.tb_2_ph.value > 0 &&
                  report.data_sample.tb_2_ph.value < 6 && (
                    <>
                      necessitando da aplicação de{' '}
                      <Text as="strong">Calcário</Text>
                    </>
                  )}
              </Text>
            </ReportItemResponse>
          </ReportItem>

          <ReportItem>
            <Heading as="h5">
              Tabela 2 – Interpretação dos parâmetros químicos nutricionais:
              macro e micronutrientes
            </Heading>

            <ReportItemBody>
              <Text>
                P - Fósforo: {report.data_sample.tb_3_p_phosphor.value} (
                {renderUnity(report.data_sample.tb_3_p_phosphor.unity)})
              </Text>
              <Text>
                K - Potássio: {report.data_sample.tb_3_k_potassium.value} (
                {renderUnity(report.data_sample.tb_3_k_potassium.unity)})
              </Text>
              {report.data_sample.tb_3_na_sodium && (
                <Text>
                  Na - Sódio: {report.data_sample.tb_3_na_sodium.value} (
                  {renderUnity(report.data_sample.tb_3_na_sodium.unity)})
                </Text>
              )}
              <Text>
                S - Enxofre: {report.data_sample.tb_3_s_sulfur.value} (
                {renderUnity(report.data_sample.tb_3_s_sulfur.unity)})
              </Text>
              <Text>
                B - Boro: {report.data_sample.tb_3_b_boron.value} (
                {renderUnity(report.data_sample.tb_3_b_boron.unity)})
              </Text>
              <Text>
                Cu - Cobre: {report.data_sample.tb_3_cu_copper.value} (
                {renderUnity(report.data_sample.tb_3_cu_copper.unity)})
              </Text>
              <Text>
                Fe - Ferro: {report.data_sample.tb_3_fe_iron.value} (
                {renderUnity(report.data_sample.tb_3_fe_iron.unity)})
              </Text>
              <Text>
                Mn - Manganês: {report.data_sample.tb_3_mn_manganese.value} (
                {renderUnity(report.data_sample.tb_3_mn_manganese.unity)})
              </Text>
              <Text>
                Zn - Zinco: {report.data_sample.tb_3_zn_zinc.value} (
                {renderUnity(report.data_sample.tb_3_zn_zinc.unity)})
              </Text>
              <Text>
                Ca - Cálcio: {report.data_sample.tb_4_ca_calcium.value}{' '}
                {renderUnity(report.data_sample.tb_4_ca_calcium.unity)}
              </Text>
              <Text>
                Mg - Magnésio: {report.data_sample.tb_4_mg_magnesium.value}{' '}
                {renderUnity(report.data_sample.tb_4_mg_magnesium.unity)}
              </Text>
              <Text>
                Al - Alumínio: {report.data_sample.tb_4_al_aluminum.value}{' '}
                {renderUnity(report.data_sample.tb_4_al_aluminum.unity)}
              </Text>
              <Text>
                H+Al - Acidez potêncial:{' '}
                {report.data_sample.tb_4_h_al_potential_acidity.value}{' '}
                {renderUnity(
                  report.data_sample.tb_4_h_al_potential_acidity.unity,
                )}
              </Text>
            </ReportItemBody>

            <ReportItemResponse>
              {report.interpretation_?.inter_tb_3_p_phosphor && (
                <Text>
                  O teor de <Text as="strong">Fósforo (P)</Text> quantificado
                  pelo método de Mehlich é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_3_p_phosphor}.
                  </Text>
                </Text>
              )}
              {report.interpretation_?.inter_tb_3_k_potassium && (
                <Text>
                  O teor de <Text as="strong">Potássio (K)</Text> é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_3_k_potassium}.
                  </Text>
                </Text>
              )}
              {report.interpretation_?.inter_tb_3_s_sulfur && (
                <Text>
                  O teor de <Text as="strong">Enxofre (S)</Text> é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_3_s_sulfur}.
                  </Text>
                </Text>
              )}
              {report.interpretation_?.inter_tb_3_b_boron && (
                <Text>
                  O teor de <Text as="strong">Boro (B)</Text> é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_3_b_boron}.
                  </Text>
                </Text>
              )}
              {report.interpretation_?.inter_tb_3_cu_copper && (
                <Text>
                  O teor de <Text as="strong">Cobre (Cu)</Text> é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_3_k_potassium}.
                  </Text>
                </Text>
              )}
              {report.interpretation_?.inter_tb_3_mn_manganese && (
                <Text>
                  O teor de <Text as="strong">Manganês (Mn)</Text> é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_3_mn_manganese}.
                  </Text>{' '}
                </Text>
              )}
              {report.interpretation_?.inter_tb_3_fe_iron && (
                <Text>
                  O teor de <Text as="strong">Ferro (fe)</Text> é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_3_fe_iron}.
                  </Text>{' '}
                </Text>
              )}
              {report.interpretation_?.inter_tb_4_ca_calcium && (
                <Text>
                  O teor de <Text as="strong">Calcio (Ca)</Text> é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_4_ca_calcium}.
                  </Text>{' '}
                </Text>
              )}
              {report.interpretation_?.inter_tb_4_mg_magnesium && (
                <Text>
                  O teor de <Text as="strong">Magnésio (Mg)</Text> é considerado{' '}
                  <Text as="strong">
                    {report.interpretation_?.inter_tb_4_mg_magnesium}.
                  </Text>{' '}
                </Text>
              )}
            </ReportItemResponse>
          </ReportItem>
        </Indent>
      </Wrapper>

      {report.calculations_?.generic._sum_bases && (
        <Wrapper>
          <Heading as="h4">
            <FiChevronRight size={18} />
            Interpretação do complexo sortivo
          </Heading>

          <Indent>
            <ReportItem>
              <ReportItemResponse>
                <Text as="span">
                  <Text as="strong">
                    SB - Soma de bases:{' '}
                    {report.calculations_?.generic._sum_bases.value} (
                    {renderUnity('cmol')})
                  </Text>
                </Text>
                <Text as="span">
                  <Text as="strong">
                    CTCef - Capacidade de Troca de Cátions:{' '}
                    {report.calculations_?.generic._ctcef.value} (
                    {renderUnity('cmol')})
                  </Text>
                </Text>
                <Text as="span">
                  <Text as="strong">
                    CTCpH7.0: {report.calculations_?.generic._ctcph7.value} (
                    {renderUnity('cmol')})
                  </Text>
                </Text>
                <Text as="span">
                  <Text as="strong">
                    m - Saturação por Alumínio:{' '}
                    {report.calculations_?.generic._m_aluminum_saturation.value}{' '}
                    ({renderUnity('%')})
                  </Text>
                </Text>
                <Text as="span">
                  <Text as="strong">
                    V% - Saturação por Bases:{' '}
                    {report.calculations_?.generic._v_base_saturation.value} (
                    {renderUnity('%')})
                  </Text>
                </Text>
              </ReportItemResponse>
              <ReportItemResponse>
                {report.interpretation_?.inter_tb_5_ctcph7 && (
                  <Text>
                    O valor da <Text as="strong">CTCpH7.0</Text> é considerado{' '}
                    <Text as="strong">
                      {report.interpretation_?.inter_tb_5_ctcph7}
                    </Text>
                  </Text>
                )}
                {report.interpretation_?.inter_tb_6_m_aluminum_saturation && (
                  <Text>
                    O valor da{' '}
                    <Text as="strong">saturação por alumínio (m)</Text> é
                    considerado{' '}
                    <Text as="strong">
                      {report.interpretation_?.inter_tb_6_m_aluminum_saturation}
                    </Text>
                  </Text>
                )}
                {report.interpretation_?.inter_tb_6_v_base_saturation && (
                  <Text>
                    O valor da <Text as="strong">saturação por bases (V%)</Text>{' '}
                    é considerado{' '}
                    <Text as="strong">
                      {report.interpretation_?.inter_tb_6_v_base_saturation}
                    </Text>
                  </Text>
                )}
              </ReportItemResponse>
            </ReportItem>
          </Indent>
        </Wrapper>
      )}

      {report.calculations_?.liming && (
        <Wrapper>
          <Heading as="h4">
            <FiChevronRight size={18} />
            Cálculo da necessidade de calcário (Calagem)
          </Heading>

          <Indent>
            <ReportItemResponse>
              {report.calculations_?.liming._liming_NCpH60.value > 0 && (
                <Text as="span">
                  <Text as="strong">
                    NCpH6.0: {report.calculations_?.liming._liming_NCpH60.value}{' '}
                    ({renderUnity('tha')})
                  </Text>
                </Text>
              )}

              {report.calculations_?.liming._liming_NCpH70.value > 0 && (
                <Text as="span">
                  <Text as="strong">
                    NCpH7.0: {report.calculations_?.liming._liming_NCpH70.value}{' '}
                    ({renderUnity('tha')})
                  </Text>
                </Text>
              )}

              {report.calculations_?.liming._liming_NCpH70cPRNT70porc.value >
                0 && (
                <Text as="span">
                  <Text as="strong">
                    NCpH7.0 c PRNT(70%):{' '}
                    {
                      report.calculations_?.liming._liming_NCpH70cPRNT70porc
                        .value
                    }{' '}
                    ({renderUnity('tha')})
                  </Text>
                </Text>
              )}
            </ReportItemResponse>

            {report.calculations_?.liming._liming_NCpH70 && (
              <ReportItemResponse>
                {report.calculations_?.liming._liming_NCpH70.value < 0 ? (
                  <Text as="strong">
                    {' '}
                    NCpH7.0: Não é recomendada a aplicação
                  </Text>
                ) : (
                  <Text as="span">
                    Para elevar o pH do solo a 7 é necessário aplicar{' '}
                    <Text as="strong">
                      {report.calculations_?.liming._liming_NCpH70.value}
                    </Text>{' '}
                    toneladas de calcário por hectare
                  </Text>
                )}
              </ReportItemResponse>
            )}

            {report.interpretation_?.inter_tb_6_v_base_saturation && (
              <ReportItemResponse>
                {report.calculations_?.liming._liming_NCpH70cPRNT70porc.value <
                0 ? (
                  <Text as="strong">
                    NCpH7.0 c PRNT(70%): Não é recomendada a aplicação
                  </Text>
                ) : (
                  <Text>
                    Considerando um calcario com PRNT de 70% é necessário
                    aplicar{' '}
                    <Text as="strong">
                      {
                        report.calculations_?.liming._liming_NCpH70cPRNT70porc
                          .value
                      }
                    </Text>{' '}
                    toneladas de calcário por hectare
                  </Text>
                )}
              </ReportItemResponse>
            )}
          </Indent>
        </Wrapper>
      )}

      {report.calculations_?.plaster && (
        <Wrapper>
          <Heading as="h4">
            <FiChevronRight size={18} />
            Cálculo da necessidade de gesso (Gessagem)
          </Heading>

          <Indent>
            <ReportItem>
              {report.calculations_?.plaster._calculate_plaster_need.value >
                0 && (
                <ReportItemResponse>
                  <Text as="span">
                    <Text as="strong">
                      NG:{' '}
                      {
                        report.calculations_?.plaster._calculate_plaster_need
                          .value
                      }{' '}
                      ({renderUnity('tha')})
                    </Text>
                  </Text>
                </ReportItemResponse>
              )}

              <ReportItemResponse>
                {report.calculations_?.plaster._calculate_plaster_need.value <
                0 ? (
                  <Text as="strong">NG: Não é recomendada a aplicação</Text>
                ) : (
                  <Text>
                    Considerando o teor de <Text as="strong">Cálcio</Text> e a{' '}
                    <Text as="strong">CTCef</Text> recomenda-se a aplicação de{' '}
                    <Text as="strong">
                      {
                        report.calculations_?.plaster._calculate_plaster_need
                          .value
                      }
                    </Text>{' '}
                    toneladas de gesso agrícola por hectare
                  </Text>
                )}
              </ReportItemResponse>
            </ReportItem>
          </Indent>
        </Wrapper>
      )}

      {report.calculations_?.fertilizing && (
        <Wrapper>
          <Heading as="h4">
            <FiChevronRight size={18} />
            Adubação
          </Heading>

          <Indent>
            {report.calculations_?.fertilizing.map(
              (fertilizing: ICalculatorFertilizingDTO) => (
                <ReportItem key={fertilizing.objetive_culture}>
                  <Heading as="h5">{fertilizing.objetive_culture}</Heading>

                  <ReportItemResponse>
                    {report.data_sample.fertilizing_objective_culture &&
                      renderPropertiesEntryCulture({
                        culture: fertilizing.objetive_culture,
                        type: 'phosphor-potassium',
                        fertilizing_objective_culture:
                          report.data_sample.fertilizing_objective_culture,
                      })}
                  </ReportItemResponse>

                  <ReportItemResponse>
                    {fertilizing.objetive_culture &&
                      renderTextCalagem(fertilizing.objetive_culture)}
                  </ReportItemResponse>

                  <ReportItemResponse>
                    {report.data_sample.fertilizing_objective_culture &&
                      renderPropertiesEntryCulture({
                        culture: fertilizing.objetive_culture,
                        type: 'nitrogen',
                        fertilizing_objective_culture:
                          report.data_sample.fertilizing_objective_culture,
                      })}
                  </ReportItemResponse>

                  <GroupResponse>
                    <Text as="span">Nitrogênio:</Text>

                    <ReportItemResponse>
                      {fertilizing.n_nitrogen !== 'Não recomendado' &&
                        fertilizing.objetive_culture !== 'Abacaxi' && (
                          <Text>
                            Aplicar{' '}
                            <Text as="strong">{fertilizing.n_nitrogen} kg</Text>{' '}
                            de N por hectare
                          </Text>
                        )}
                      {fertilizing.objetive_culture &&
                        report.data_sample.fertilizing_objective_culture &&
                        renderTextNitrogenio(
                          fertilizing.objetive_culture,
                          report.data_sample.fertilizing_objective_culture,
                        )}
                    </ReportItemResponse>
                  </GroupResponse>

                  <GroupResponse>
                    <Text as="span">Fósforo: </Text>

                    <ReportItemResponse>
                      {!!fertilizing.p_phosphor_first_fertilizing && (
                        <Text>
                          Para o 1º cultivo aplique{' '}
                          <Text as="strong">
                            {fertilizing.p_phosphor_first_fertilizing} kg
                          </Text>{' '}
                          por hectare.{' '}
                        </Text>
                      )}
                      {!!fertilizing.p_phosphor_second_fertilizing && (
                        <Text>
                          Para o 2º cultivo aplique{' '}
                          <Text as="strong">
                            {fertilizing.p_phosphor_second_fertilizing} kg
                          </Text>{' '}
                          por hectare.{' '}
                        </Text>
                      )}
                      {!!fertilizing.p_phosphor_fertilizing && (
                        <Text>
                          Aplicar{' '}
                          <Text as="strong">
                            {fertilizing.p_phosphor_fertilizing} kg
                          </Text>{' '}
                          de &emsp;{renderUnity('p2o5')} por hectare.{' '}
                        </Text>
                      )}
                      {!!report.data_sample.fertilizing_objective_culture &&
                        renderThaExpec(
                          report.data_sample.fertilizing_objective_culture,
                          'p_phosphor_tha',
                        )}
                    </ReportItemResponse>
                  </GroupResponse>

                  <GroupResponse>
                    <Text as="span">Potássio: </Text>

                    <ReportItemResponse>
                      {fertilizing.k_potassium_first_fertilizing && (
                        <Text>
                          Para o 1º cultivo aplique{' '}
                          <Text as="strong">
                            {fertilizing.k_potassium_first_fertilizing} kg
                          </Text>{' '}
                          por hectare.{' '}
                        </Text>
                      )}
                      {fertilizing.k_potassium_second_fertilizing && (
                        <Text>
                          Para o 2º cultivo aplique{' '}
                          <Text as="strong">
                            {fertilizing.k_potassium_second_fertilizing} kg{' '}
                          </Text>
                          por hectare.{' '}
                        </Text>
                      )}
                      {fertilizing.k_potassium_fertilizing && (
                        <Text>
                          Aplicar{' '}
                          <Text as="strong">
                            {fertilizing.k_potassium_fertilizing} kg{' '}
                          </Text>
                          de {renderUnity('k2o')} por hectare.{' '}
                        </Text>
                      )}
                      {report.data_sample.fertilizing_objective_culture &&
                        renderThaExpec(
                          report.data_sample.fertilizing_objective_culture,
                          'k_potassium_tha',
                        )}
                    </ReportItemResponse>
                  </GroupResponse>

                  <GroupResponse>
                    <ReportItemResponse>
                      {renderTextFosforoPotassio(fertilizing.objetive_culture)}
                    </ReportItemResponse>
                  </GroupResponse>

                  {fertilizing.micro_nutrients_boron && (
                    <GroupResponse>
                      <Text as="span">Boro: </Text>

                      <ReportItemResponse>
                        <Text>
                          Aplicar{' '}
                          <Text as="strong">
                            {fertilizing.micro_nutrients_boron}{' '}
                          </Text>
                          kg de B por hectare.{' '}
                        </Text>
                        {report.data_sample.fertilizing_objective_culture &&
                          renderThaExpec(
                            report.data_sample.fertilizing_objective_culture,
                            'b',
                          )}
                      </ReportItemResponse>
                    </GroupResponse>
                  )}

                  {fertilizing.micro_nutrients_zinc && (
                    <GroupResponse>
                      <Text as="span">Zinco: </Text>

                      <ReportItemResponse>
                        <Text>
                          Aplicar{' '}
                          <Text as="strong">
                            {fertilizing.micro_nutrients_zinc}{' '}
                          </Text>
                          kg de Zn por hectare.{' '}
                        </Text>
                        {report.data_sample.fertilizing_objective_culture &&
                          renderThaExpec(
                            report.data_sample.fertilizing_objective_culture,
                            'b',
                          )}
                      </ReportItemResponse>
                    </GroupResponse>
                  )}
                </ReportItem>
              ),
            )}
          </Indent>
        </Wrapper>
      )}

      {report.calculations_?.carbon_stock && (
        <Wrapper>
          <Heading as="h4">
            <FiChevronRight size={18} />
            Estoques de carbono
          </Heading>

          <Indent>
            <ReportItem>
              <ReportItemResponse>
                <Text as="span">
                  Estoques de carbono no solo:{' '}
                  <Text as="strong">
                    {report.calculations_?.carbon_stock._carb_value.value}{' '}
                    {renderUnity('tha')}
                  </Text>
                </Text>

                <Infor>
                  <Text as="span">
                    <i>
                      Valores de referência de Estoques de Carbono no Solo
                      conforme os Biomas Brasileiros são:{' '}
                    </i>
                  </Text>
                  <Table>
                    <tr>
                      <th>Bioma</th>
                      <th>Vegetação Nativa</th>
                      <th>Área antropizada</th>
                    </tr>
                    <tr>
                      <td />
                      <td
                        colSpan={2}
                        style={{
                          textAlign: 'center',
                        }}
                      >
                        {' '}
                        Estoques de Carbono ({renderUnity('tha')}){' '}
                      </td>
                    </tr>
                    <tr>
                      <td>Amazônia</td>
                      <td>29,08</td>
                      <td>33,35</td>
                    </tr>
                    <tr>
                      <td>Caatinga</td>
                      <td>23,68</td>
                      <td>22,27</td>
                    </tr>
                    <tr>
                      <td>Cerrado</td>
                      <td>39,17</td>
                      <td>33,52</td>
                    </tr>
                    <tr>
                      <td>Mata Atlântica</td>
                      <td>41,85</td>
                      <td>37,51</td>
                    </tr>
                    <tr>
                      <td>Pampa</td>
                      <td>39,32</td>
                      <td>34,17</td>
                    </tr>
                  </Table>
                </Infor>
              </ReportItemResponse>
            </ReportItem>
          </Indent>
        </Wrapper>
      )}

      {report.calculations_?.water_availability && (
        <Wrapper>
          <Heading as="h4">
            <FiChevronRight size={18} />
            Disponibilidade de água
          </Heading>

          <Indent>
            <ReportItem>
              <ReportItemResponse>
                <Text as="span">
                  θcc - Conteúdo de água na Capacidade de campo:{' '}
                  <Text as="strong">
                    {report.calculations_?.water_availability.tetacc.value.toFixed(
                      2,
                    )}{' '}
                    {renderUnity(
                      report.calculations_?.water_availability.tetacc.unity,
                    )}
                  </Text>
                </Text>
                <br />
                <Text as="span">
                  θpmp - Conteúdo de água no Ponto de Mucha Permanente:{' '}
                  <Text as="strong">
                    {report.calculations_?.water_availability.tetapmp.value.toFixed(
                      2,
                    )}{' '}
                    {renderUnity(
                      report.calculations_?.water_availability.tetapmp.unity,
                    )}
                  </Text>
                </Text>
                <br />
                <Text as="span">
                  θAd - Conteúdo de água disponível no solo:{' '}
                  <Text as="strong">
                    {report.calculations_?.water_availability.tetaad.value.toFixed(
                      2,
                    )}{' '}
                    {renderUnity(
                      report.calculations_?.water_availability.tetaad.unity,
                    )}
                  </Text>
                </Text>
              </ReportItemResponse>
            </ReportItem>
          </Indent>
        </Wrapper>
      )}

      <Share report={report} />

      {isMult && <Hr />}
    </ReportSingleContainer>
  )
}
