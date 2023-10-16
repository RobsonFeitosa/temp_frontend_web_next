import React from 'react'

import { Container, styling } from './styles'
import { ICalculatorFertilizingDTO, IReportDTO } from '../../../dtos/report.dto'
import formatDate from '@/utils/formatDate'
import { Text } from '@alosix-hub-ui/react'
import { renderUnity } from '@/renders/unity'
import {
  renderTextCalagem,
  renderTextFosforoPotassio,
  renderTextNitrogenio,
  renderThaExpec,
} from '@/renders/fertilizingReport'

const Printer = React.forwardRef<HTMLDivElement, { report: IReportDTO }>(
  ({ report }, ref) => {
    const IdReport = report.id.slice(0, 11)

    return (
      <>
        <style type="text/css" media="print">
          {
            '\
              @page { size: auto; margin: 15mm }\
            '
          }
        </style>
        <Container style={{ display: 'none' }}>
          <div ref={ref}>
            <div>
              <span
                style={{
                  fontSize: 14,
                  display: 'block',
                  marginBottom: 12,
                  fontWeight: 900,
                  textTransform: 'uppercase',
                }}
              >
                Análise da amostra: {IdReport}{' '}
              </span>
            </div>

            <div className="content">
              <div style={styling.headerSample}>
                <Text as="span" size="xxs" style={styling.bodyItem}>
                  Plantas de cobertura: {report.description_cuture}
                </Text>
                <Text as="span" size="xxs" style={styling.bodyItem}>
                  Profundidade (cm):{' '}
                  {report.data_sample.tb_1_description_deep_culture}
                </Text>
                <Text as="span" size="xxs" style={styling.bodyItem}>
                  Região: {report.city}-{report.uf}
                </Text>
                <Text as="span" size="xxs" style={styling.bodyItem}>
                  Analisado:{' '}
                  {formatDate({ date: report.created_at, hoursView: true })} h
                </Text>
                <Text as="span" size="xxs" style={styling.bodyItem}>
                  N.: {IdReport}
                </Text>
              </div>

              <div className="groupsService">
                <div style={styling.groupsServices}>
                  <div className="tb1" style={styling.tbWrapper}>
                    <Text as="span">
                      <Text as="strong" size="xxs">
                        Tabela 1
                      </Text>
                    </Text>

                    <div className="report-item-body" style={styling.body}>
                      <div style={styling.gGroup}>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Argila: {report.data_sample.tb_1_clay.value} (
                          {renderUnity(
                            report.data_sample.tb_1_clay.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Silte: {report.data_sample.tb_1_silt.value} (
                          {renderUnity(
                            report.data_sample.tb_1_silt.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Areia: {report.data_sample.tb_1_sand.value} (
                          {renderUnity(
                            report.data_sample.tb_1_sand.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Matéria orgânica:{' '}
                          {report.data_sample.tb_2_organic_matter.value} (
                          {renderUnity(
                            report.data_sample.tb_2_organic_matter.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          pH: {report.data_sample.tb_2_ph.value} (
                          {renderUnity(report.data_sample.tb_2_ph.unity, true)})
                        </Text>
                      </div>
                    </div>

                    <div
                      className="report-item-response"
                      style={styling.itemResponse}
                    >
                      <Text size="xxs" style={styling.itemResponseRow}>
                        O valor de pH é considerado
                        <span style={styling.itemResponseForce}>
                          {report?.interpretation_?.inter_tb_2_ph},
                        </span>{' '}
                        {report.data_sample.tb_2_ph.value < 6 && (
                          <>
                            necessitando da aplicação de
                            <span style={styling.itemResponseForce}>
                              Calcário
                            </span>
                          </>
                        )}
                      </Text>
                    </div>
                  </div>

                  <div className="tb2" style={styling.tbWrapper}>
                    <Text as="span">
                      <Text as="strong" size="xxs">
                        Tabela 2
                      </Text>
                    </Text>

                    <div className="report-item-body" style={styling.body}>
                      <div style={styling.gGroup}>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          P - Fósforo:{' '}
                          {report.data_sample.tb_3_p_phosphor.value} (
                          {renderUnity(
                            report.data_sample.tb_3_p_phosphor.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          K - Potássio:{' '}
                          {report.data_sample.tb_3_k_potassium.value} (
                          {renderUnity(
                            report.data_sample.tb_3_k_potassium.unity,
                            true,
                          )}
                          )
                        </Text>

                        {report.data_sample.tb_3_na_sodium && (
                          <Text as="span" size="xxs" style={styling.bodyItem}>
                            Na - Sódio:{' '}
                            {report.data_sample.tb_3_na_sodium.value} (
                            {renderUnity(
                              report.data_sample.tb_3_na_sodium.unity,
                              true,
                            )}
                            )
                          </Text>
                        )}
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          S - Enxofre: {report.data_sample.tb_3_s_sulfur.value}{' '}
                          (
                          {renderUnity(
                            report.data_sample.tb_3_s_sulfur.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          B - Boro: {report.data_sample.tb_3_b_boron.value} (
                          {renderUnity(
                            report.data_sample.tb_3_b_boron.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Cu - Cobre: {report.data_sample.tb_3_cu_copper.value}{' '}
                          (
                          {renderUnity(
                            report.data_sample.tb_3_cu_copper.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Fe - Ferro: {report.data_sample.tb_3_fe_iron.value} (
                          {renderUnity(
                            report.data_sample.tb_3_fe_iron.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Mn - Manganês:{' '}
                          {report.data_sample.tb_3_mn_manganese.value} (
                          {renderUnity(
                            report.data_sample.tb_3_mn_manganese.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Zn - Zinco: {report.data_sample.tb_3_zn_zinc.value} (
                          {renderUnity(
                            report.data_sample.tb_3_zn_zinc.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Ca - Cálcio:{' '}
                          {report.data_sample.tb_4_ca_calcium.value} (
                          {renderUnity(
                            report.data_sample.tb_4_ca_calcium.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Mg - Magnésio:{' '}
                          {report.data_sample.tb_4_mg_magnesium.value} (
                          {renderUnity(
                            report.data_sample.tb_4_mg_magnesium.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          Al - Alumínio:{' '}
                          {report.data_sample.tb_4_al_aluminum.value} (
                          {renderUnity(
                            report.data_sample.tb_4_al_aluminum.unity,
                            true,
                          )}
                          )
                        </Text>
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          H+Al - Acidez potêncial:{' '}
                          {report.data_sample.tb_4_h_al_potential_acidity.value}{' '}
                          {report.data_sample.tb_4_h_al_potential_acidity
                            .value &&
                            renderUnity(
                              report.data_sample.tb_4_h_al_potential_acidity
                                .unity,
                              true,
                            )}
                        </Text>
                      </div>
                    </div>

                    <div
                      className="report-item-response"
                      style={styling.itemResponse}
                    >
                      <div style={styling.gGroupBlock}>
                        {report.interpretation_?.inter_tb_3_p_phosphor && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            O teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Fósforo (P)
                            </span>{' '}
                            quantificado pelo método de Mehlich é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_3_p_phosphor}.
                            </span>
                          </Text>
                        )}
                        {report.interpretation_?.inter_tb_3_k_potassium && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            O teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Potássio (K)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_3_k_potassium}.
                            </span>
                          </Text>
                        )}
                        {report.interpretation_?.inter_tb_3_s_sulfur && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            O teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Enxofre (S)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_3_s_sulfur}.
                            </span>
                          </Text>
                        )}
                        {report.interpretation_?.inter_tb_3_s_sulfur && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            O teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Cobre (Cu)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_3_cu_copper}.
                            </span>
                          </Text>
                        )}
                        {report.interpretation_?.inter_tb_3_mn_manganese && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            O teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Manganês (Mn)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_3_mn_manganese}.
                            </span>{' '}
                          </Text>
                        )}
                        {report.interpretation_?.inter_tb_3_zn_zinc && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            O teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Zinco (zn)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_3_zn_zinc}.
                            </span>{' '}
                          </Text>
                        )}
                        {report.interpretation_?.inter_tb_3_zn_zinc && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            O teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Calcio (Ca)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_4_ca_calcium}.
                            </span>{' '}
                          </Text>
                        )}
                        {report.interpretation_?.inter_tb_3_zn_zinc && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            O teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Magesio (Mg)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_4_mg_magnesium}.
                            </span>{' '}
                          </Text>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* end table */}
                </div>
              </div>

              {report.calculations_?.generic && (
                <div className="tb5" style={styling.tbWrapper}>
                  <div className="limingPlastering">
                    <Text as="strong" size="xxs">
                      INTERPRETAÇÃO DO COMPLEXO SORTIVO
                    </Text>
                  </div>

                  <div className="report-item-body" style={styling.body}>
                    <div style={styling.gGroup}>
                      <Text as="span" size="xxs" style={styling.bodyItem}>
                        SB - Soma de bases:{' '}
                        {report.calculations_.generic._sum_bases.value} (
                        {renderUnity('cmol', true)})
                      </Text>
                      <Text as="span" size="xxs" style={styling.bodyItem}>
                        CTCef - Capacidade de Troca de Cátions:{' '}
                        {report.calculations_.generic._ctcef.value} (
                        {renderUnity('cmol', true)})
                      </Text>
                      <Text as="span" size="xxs" style={styling.bodyItem}>
                        CTCpH7.0: {report.calculations_.generic._ctcph7.value} (
                        {renderUnity('cmol', true)})
                      </Text>

                      <Text as="span" size="xxs" style={styling.bodyItem}>
                        m - Saturação por Alumínio:{' '}
                        {
                          report.calculations_.generic._m_aluminum_saturation
                            .value
                        }{' '}
                        ({renderUnity('%', true)})
                      </Text>
                      <Text as="span" size="xxs" style={styling.bodyItem}>
                        V% - Saturação por Bases:{' '}
                        {report.calculations_.generic._v_base_saturation.value}{' '}
                        ({renderUnity('%', true)})
                      </Text>
                    </div>
                  </div>

                  <div style={styling.groupsServices}>
                    <div style={styling.tbWrapper}>
                      <div style={styling.groupFertilizing}>
                        {report.interpretation_?.inter_tb_5_ctcph7 && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            A{' '}
                            <span style={styling.itemResponseForce}>
                              CTCpH7.0
                            </span>{' '}
                            é considerado
                            <span style={styling.itemResponseForce}>
                              {report.interpretation_?.inter_tb_5_ctcph7}.
                            </span>
                          </Text>
                        )}
                        {report.interpretation_
                          ?.inter_tb_6_m_aluminum_saturation && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            A{' '}
                            <span style={styling.itemResponseForce}>
                              Saturação por Alumínio (m)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {
                                report.interpretation_
                                  .inter_tb_6_m_aluminum_saturation
                              }
                              .
                            </span>
                          </Text>
                        )}
                        {report.interpretation_
                          ?.inter_tb_6_v_base_saturation && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            A{' '}
                            <span style={styling.itemResponseForce}>
                              Saturação por bases (V%)
                            </span>{' '}
                            é considerado{' '}
                            <span style={styling.itemResponseForce}>
                              {
                                report.interpretation_
                                  ?.inter_tb_6_v_base_saturation
                              }
                              .
                            </span>
                          </Text>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {report.calculations_?.liming && (
                <div className="tb7" style={styling.tbWrapper}>
                  <div className="limingPlastering">
                    <Text as="strong" size="xxs">
                      {' '}
                      CÁLCULO DA NECESSIDADE DE CALCÁRIO (CALAGEM)
                    </Text>
                  </div>

                  <div className="report-item-body" style={styling.body}>
                    <div style={styling.gGroup}>
                      {report.calculations_.liming._liming_NCpH60.value > 0 && (
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          NCpH6.0:{' '}
                          {report.calculations_.liming._liming_NCpH60.value} (
                          {renderUnity('tha', true)})
                        </Text>
                      )}

                      {report.calculations_.liming._liming_NCpH70.value > 0 && (
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          NCpH7.0:{' '}
                          {report.calculations_.liming._liming_NCpH70.value} (
                          {renderUnity('tha', true)})
                        </Text>
                      )}

                      {report.calculations_.liming._liming_NCpH70cPRNT70porc
                        .value > 0 && (
                        <Text as="span" size="xxs" style={styling.bodyItem}>
                          NCpH7.0 c PRNT(70%):{' '}
                          {
                            report.calculations_.liming
                              ._liming_NCpH70cPRNT70porc.value
                          }{' '}
                          ({renderUnity('tha', true)})
                        </Text>
                      )}
                    </div>
                  </div>

                  <div
                    className="report-item-response"
                    style={styling.itemResponse}
                  >
                    <div style={styling.gGroupBlock}>
                      {report.calculations_.liming._liming_NCpH70.value && (
                        <Text size="xxs" style={styling.itemResponseRow}>
                          Para elevar o pH do solo a 7 é necessário aplicar{' '}
                          <span style={styling.itemResponseForce}>
                            {report.calculations_.liming._liming_NCpH70.value}
                          </span>{' '}
                          toneladas de calcário por hectare
                        </Text>
                      )}

                      {report.interpretation_?.inter_tb_6_v_base_saturation && (
                        <Text size="xxs" style={styling.itemResponseRow}>
                          Considerando um calcario com PRNT de 70% é necessário
                          aplicar{' '}
                          <span style={styling.itemResponseForce}>
                            {
                              report.calculations_.liming
                                ._liming_NCpH70cPRNT70porc.value
                            }
                          </span>{' '}
                          toneladas de calcário por hectare
                        </Text>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {/* end table */}

              {report.calculations_?.plaster && (
                <div className="tb8" style={styling.tbWrapper}>
                  <div className="limingPlastering">
                    <Text as="strong" size="xxs">
                      CÁLCULO DA NECESSIDADE DE GESSO (GESSAGEM)
                    </Text>
                  </div>

                  {report.calculations_.plaster._calculate_plaster_need.value >
                  0 ? (
                    <>
                      <div className="report-item-body" style={styling.body}>
                        <div style={styling.gGroup}>
                          <Text as="span" size="xxs" style={styling.bodyItem}>
                            NG:{' '}
                            {
                              report.calculations_.plaster
                                ._calculate_plaster_need.value
                            }{' '}
                            ({renderUnity('tha', true)})
                          </Text>
                        </div>
                      </div>

                      <div
                        className="report-item-response"
                        style={styling.itemResponse}
                      >
                        {report.calculations_.plaster._calculate_plaster_need
                          .value && (
                          <Text size="xxs" style={styling.itemResponseRow}>
                            Considerando o teor de{' '}
                            <span style={styling.itemResponseForce}>
                              Cálcio
                            </span>{' '}
                            e a{' '}
                            <span style={styling.itemResponseForce}>CTCef</span>{' '}
                            recomenda-se a aplicação de{' '}
                            <span style={styling.itemResponseForce}>
                              {
                                report.calculations_.plaster
                                  ._calculate_plaster_need.value
                              }
                            </span>{' '}
                            toneladas de gesso agrícola por hectare.
                          </Text>
                        )}
                      </div>
                    </>
                  ) : (
                    <Text as="span" size="xxs" style={styling.bodyItem}>
                      Não é recomendada a aplicação
                    </Text>
                  )}
                </div>
              )}

              {report.calculations_?.fertilizing && (
                <div style={styling.groupReponse}>
                  <div className="limingPlastering">
                    <Text as="strong" size="xxs">
                      ADUBAÇÃO
                    </Text>
                  </div>
                  <div style={styling.groupsServices}>
                    <div className="tb1" style={styling.tbWrapper}>
                      {report.calculations_.fertilizing.map(
                        (fertilizing: ICalculatorFertilizingDTO) => (
                          <div
                            key={fertilizing.objetive_culture + report.id}
                            style={styling.fertilizingWrapper}
                          >
                            <Text as="strong" size="xxs">
                              {fertilizing.objetive_culture}
                            </Text>

                            {fertilizing.objetive_culture.length > 0 &&
                              renderTextCalagem(
                                fertilizing.objetive_culture,
                                true,
                              )}

                            {fertilizing.objetive_culture === 'Milho' && (
                              <div style={styling.groupFertilizing}>
                                <Text
                                  size="xxs"
                                  style={styling.itemResponseRow}
                                >
                                  Cultura anterior: {'  '}
                                  <span style={styling.itemResponseForce}>
                                    {fertilizing.objetive_culture}
                                  </span>
                                </Text>
                              </div>
                            )}

                            <div style={styling.groupFertilizing}>
                              <Text size="xxs" style={styling.itemResponseRow}>
                                Nitrogênio: {'  '}
                              </Text>

                              <div style={styling.gGroupBlock}>
                                {fertilizing.n_nitrogen !== 'Não recomendado' &&
                                  fertilizing.objetive_culture !==
                                    'Abacaxi' && (
                                    <Text
                                      size="xxs"
                                      style={styling.itemResponseRow}
                                    >
                                      Aplicar{' '}
                                      <span style={styling.itemResponseForce}>
                                        {fertilizing.n_nitrogen} kg
                                      </span>{' '}
                                      de N por hectare.
                                    </Text>
                                  )}

                                {fertilizing.objetive_culture &&
                                  report.data_sample
                                    .fertilizing_objective_culture &&
                                  renderTextNitrogenio(
                                    fertilizing.objetive_culture,
                                    report.data_sample
                                      .fertilizing_objective_culture,
                                    true,
                                  )}
                              </div>
                            </div>

                            <div style={styling.groupFertilizing}>
                              <Text size="xxs" style={styling.itemResponseRow}>
                                Fósforo: {'  '}
                              </Text>

                              <div style={styling.gGroupBlock}>
                                {fertilizing.p_phosphor_first_fertilizing && (
                                  <Text
                                    size="xxs"
                                    style={styling.itemResponseRow}
                                  >
                                    Para o 1º cultivo aplique{' '}
                                    <span style={styling.itemResponseForce}>
                                      {fertilizing.p_phosphor_first_fertilizing}{' '}
                                      kg
                                    </span>{' '}
                                    por hectare.{' '}
                                  </Text>
                                )}

                                {fertilizing.p_phosphor_second_fertilizing && (
                                  <Text
                                    size="xxs"
                                    style={styling.itemResponseRow}
                                  >
                                    Para o 2º cultivo aplique{' '}
                                    <span style={styling.itemResponseForce}>
                                      {
                                        fertilizing.p_phosphor_second_fertilizing
                                      }{' '}
                                      kg
                                    </span>{' '}
                                    por hectare.{' '}
                                  </Text>
                                )}

                                {fertilizing.p_phosphor_fertilizing && (
                                  <Text
                                    size="xxs"
                                    style={styling.itemResponseRow}
                                  >
                                    Aplicar{' '}
                                    <span style={styling.itemResponseForce}>
                                      {fertilizing.p_phosphor_fertilizing} kg
                                    </span>
                                    de &nbsp;{renderUnity('p2o5', true)} &nbsp;
                                    por hectare.{' '}
                                  </Text>
                                )}

                                {report.data_sample
                                  .fertilizing_objective_culture &&
                                  renderThaExpec(
                                    report.data_sample
                                      .fertilizing_objective_culture,
                                    'p_phosphor_tha',
                                  )}
                              </div>
                            </div>

                            <div style={styling.groupFertilizing}>
                              <div style={styling.groupFertilizing}>
                                <Text
                                  size="xxs"
                                  style={styling.itemResponseRow}
                                >
                                  Potássio: {'  '}
                                </Text>

                                <div style={styling.gGroupBlock}>
                                  {fertilizing.k_potassium_first_fertilizing && (
                                    <Text
                                      size="xxs"
                                      style={styling.itemResponseRow}
                                    >
                                      Para o 1º cultivo aplique{' '}
                                      <span style={styling.itemResponseForce}>
                                        {
                                          fertilizing.k_potassium_first_fertilizing
                                        }{' '}
                                        kg
                                      </span>{' '}
                                      por hectare.{' '}
                                    </Text>
                                  )}

                                  {fertilizing.k_potassium_second_fertilizing && (
                                    <Text
                                      size="xxs"
                                      style={styling.itemResponseRow}
                                    >
                                      Para o 2º cultivo aplique{' '}
                                      <span style={styling.itemResponseForce}>
                                        {
                                          fertilizing.k_potassium_second_fertilizing
                                        }{' '}
                                        kg
                                      </span>{' '}
                                      por hectare.{' '}
                                    </Text>
                                  )}

                                  {fertilizing.k_potassium_fertilizing && (
                                    <Text
                                      size="xxs"
                                      style={styling.itemResponseRow}
                                    >
                                      Aplicar{' '}
                                      <span style={styling.itemResponseForce}>
                                        {fertilizing.k_potassium_fertilizing} kg
                                      </span>{' '}
                                      de &nbsp;{renderUnity('p2o5', true)}{' '}
                                      &nbsp;por hectare.{' '}
                                    </Text>
                                  )}

                                  {report.data_sample
                                    .fertilizing_objective_culture &&
                                    renderThaExpec(
                                      report.data_sample
                                        .fertilizing_objective_culture,
                                      'k_potassium_tha',
                                    )}
                                </div>
                              </div>
                            </div>

                            <div style={styling.groupFertilizing}>
                              <div style={styling.groupFertilizing}>
                                {renderTextFosforoPotassio(
                                  fertilizing.objetive_culture,
                                  true,
                                )}
                              </div>
                            </div>

                            <div style={styling.groupFertilizing}>
                              <div style={styling.groupFertilizing}>
                                <div style={styling.gGroupBlock}>
                                  {fertilizing.micro_nutrients_boron && (
                                    <div>
                                      <Text
                                        size="xxs"
                                        style={styling.itemResponseRow}
                                      >
                                        Boro:{' '}
                                      </Text>

                                      <Text
                                        size="xxs"
                                        style={styling.itemResponseRow}
                                      >
                                        Aplicar{' '}
                                        <span style={styling.itemResponseForce}>
                                          {fertilizing.micro_nutrients_boron}{' '}
                                        </span>
                                        kg de B por hectare.{' '}
                                      </Text>

                                      {report.data_sample
                                        .fertilizing_objective_culture &&
                                        renderThaExpec(
                                          report.data_sample
                                            .fertilizing_objective_culture,
                                          'b',
                                        )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div style={styling.groupFertilizing}>
                              <div style={styling.groupFertilizing}>
                                <div style={styling.gGroupBlock}>
                                  {fertilizing.micro_nutrients_boron && (
                                    <div>
                                      <Text
                                        size="xxs"
                                        style={styling.itemResponseRow}
                                      >
                                        Zinco:{' '}
                                      </Text>

                                      <Text
                                        size="xxs"
                                        style={styling.itemResponseRow}
                                      >
                                        Aplicar{' '}
                                        <span style={styling.itemResponseForce}>
                                          {fertilizing.micro_nutrients_zinc}{' '}
                                        </span>
                                        kg de Zn por hectare.{' '}
                                      </Text>

                                      {report.data_sample
                                        .fertilizing_objective_culture &&
                                        renderThaExpec(
                                          report.data_sample
                                            .fertilizing_objective_culture,
                                          'b',
                                        )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              )}

              {report.calculations_?.carbon_stock && (
                <div className="groupsService">
                  <div className="limingPlastering">
                    <Text as="strong" size="xxs">
                      ESTOQUES DE CARBONO
                    </Text>
                  </div>
                  <div style={styling.groupsServices}>
                    <div style={styling.tbWrapper}>
                      <div style={styling.groupFertilizing}>
                        <Text size="xxs" style={styling.itemResponseRow}>
                          Estoques de carbono no solo:&nbsp;
                          <strong>
                            {
                              report.calculations_.carbon_stock._carb_value
                                .value
                            }{' '}
                            {renderUnity('tha', true)}
                          </strong>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {report.calculations_?.water_availability && (
                <div className="groupsService">
                  <div className="limingPlastering">
                    <Text as="strong" size="xxs">
                      DISPONIBILIDADE DE ÁGUA
                    </Text>
                  </div>
                  <div style={styling.groupsServices}>
                    <div style={styling.tbWrapper}>
                      <div style={styling.groupFertilizing}>
                        <Text size="xxs" style={styling.itemResponseRow}>
                          θcc - Conteúdo de água na Capacidade de campo:&nbsp;
                          <strong>
                            {report.calculations_.water_availability.tetacc.value.toFixed(
                              2,
                            )}{' '}
                            {renderUnity(
                              report.calculations_.water_availability.tetapmp
                                .unity,
                              true,
                            )}
                          </strong>
                        </Text>

                        <Text size="xxs" style={styling.itemResponseRow}>
                          θpmp - Conteúdo de água no Ponto de Mucha
                          Permanente:&nbsp;
                          <strong>
                            {report.calculations_.water_availability.tetapmp.value.toFixed(
                              2,
                            )}{' '}
                            {renderUnity(
                              report.calculations_.water_availability.tetapmp
                                .unity,
                              true,
                            )}
                          </strong>
                        </Text>

                        <Text size="xxs" style={styling.itemResponseRow}>
                          θAd - Conteúdo de água disponível no solo:&nbsp;
                          <strong>
                            {report.calculations_.water_availability.tetapmp.value.toFixed(
                              2,
                            )}{' '}
                            {renderUnity(
                              report.calculations_.water_availability.tetapmp
                                .unity,
                              true,
                            )}
                          </strong>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div style={styling.bibliography}>{/* <Bibliografy /> */}</div>

              {/* end groups services */}
            </div>
          </div>
        </Container>
      </>
    )
  },
)

export default Printer

Printer.displayName = 'Printer'
