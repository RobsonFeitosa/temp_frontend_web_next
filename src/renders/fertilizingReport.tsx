import { Fields } from '@/pages/home/components/Calculator/components/CalculateOptions/OptionsFields/config'
import { Text } from '@alosix-hub-ui/react'
import React from 'react'
import { renderUnity } from './unity'
import { styling } from '@/pages/home/components/Calculator/Report/Share/Printer/styles'
import { ICultureObjective } from '@/pages/home/components/Calculator/dtos/report.dto'

const renderSwitchAbacaxi = (stage: string): string => {
  switch (stage) {
    case 'E1':
      return '1,3'
    case 'E2':
      return '4,0'
    case 'E3':
      return '2,7'
    case 'E4':
      return '2,7'
    case 'E5':
      return '2,7'
    default:
      return 'non-exist'
  }
}

export const renderTextCalagem = (culture: string, isPrint?: boolean): any => {
  const sizeMain = isPrint ? 'xxs' : 'sm'
  switch (culture) {
    case Fields.feijao:
      return (
        <div style={styling.groupFertilizing}>
          <Text size={sizeMain}>Calagem: </Text>

          <Text size={sizeMain}>
            O feijão é muito sensível à acidez do solo, por isso o pH do solo
            deve ser igual ou próximo de 6,0.
          </Text>
        </div>
      )
    case Fields.milho:
    case Fields.alho:
    case Fields.beterraba:
    case Fields.cenoura:
    case Fields.melancia:
    case Fields.melao:
    case Fields.pimentao:
    case Fields.batataDoce:
    case Fields.pepino:
    case Fields.batata:
    case Fields.canaDeAcucar:
      return (
        <div style={styling.groupFertilizing}>
          <Text size={sizeMain}>Calagem: </Text>

          <Text size={sizeMain}>
            O solo deve estar com o pH igual ou próximo de 6,0.
          </Text>
        </div>
      )
    case Fields.gramineas:
      return (
        <div style={styling.groupFertilizing}>
          <Text size={sizeMain}>Calagem: </Text>

          <Text size={sizeMain}>
            O solo deve estar com o pH igual ou próximo de 5,5.
          </Text>
        </div>
      )
    // TODO: Verificar se existes e4sses casos (soja, sorgo, abobora, aboboraMoranga)
    // case Fields.soja:
    //   return (
    //     <>
    //       <Text size={sizeMain}>Calagem: </Text>

    //       <div className="report-item-response">
    //         <Text size={sizeMain}>O solo deve estar com o pH igual ou próximo de 6,0.</Text>
    //       </div>
    //     </>
    //   )
    // case Fields.sorgo:
    //   return (
    //     <>
    //       <Text size={sizeMain}>Calagem: </Text>

    //       <div className="report-item-response">
    //         <Text size={sizeMain}>O solo deve estar com o pH igual ou próximo de 6,0.</Text>
    //       </div>
    //     </>
    //   )
    // case Fields.abobora:
    //   return (
    //     <>
    //       <Text size={sizeMain}>Calagem: </Text>

    //       <div className="report-item-response">
    //         <Text size={sizeMain}>O solo deve estar com o pH igual ou próximo de 6,0.</Text>
    //       </div>
    //     </>
    //   )
    // case Fields.aboboraMoranga:
    //   return (
    //     <>
    //       <Text size={sizeMain}>Calagem: </Text>

    //       <div className="report-item-response">
    //         <Text size={sizeMain}>O solo deve estar com o pH igual ou próximo de 6,0.</Text>
    //       </div>
    //     </>
    //   )
    case Fields.alface:
      return (
        <div style={styling.groupFertilizing}>
          <Text size={sizeMain}>Calagem: </Text>

          <Text size={sizeMain}>
            O solo deve estar com o pH igual ou próximo de 6,0; saturação por
            bases maior que 80% e teor de Mg maior que 1,0{' '}
            {renderUnity('cmol', isPrint)}
          </Text>
        </div>
      )
    // case Fields.chicoria:
    //   return (
    //     <>
    //       <Text size={sizeMain}>Calagem: </Text>

    //       <ReportItemResponse>
    //         <Text size={sizeMain}>
    //           O solo deve estar com o pH igual ou próximo de 6,0; saturação por
    //           bases maior que 80% e teor de Mg maior que 1,0{' '}
    //           {renderUnity('cmol', isPrint)}
    //         </Text>
    //       </ReportItemResponse>
    //     </>
    //   )
    // case Fields.almeirao:
    //   return (
    //     <>
    //       <Text size={sizeMain}>Calagem: </Text>

    //       <ReportItemResponse>
    //         <Text size={sizeMain}>
    //           O solo deve estar com o pH igual ou próximo de 6,0; saturação por
    //           bases maior que 80% e teor de Mg maior que 1,0{' '}
    //           {renderUnity('cmol', isPrint)}
    //         </Text>
    //       </ReportItemResponse>
    //     </>
    //   )
    // case Fields.rucula:
    //   return (
    //     <>
    //       <Text size={sizeMain}>Calagem: </Text>

    //       <ReportItemResponse>
    //         <Text size={sizeMain}>
    //           O solo deve estar com o pH igual ou próximo de 6,0; saturação por
    //           bases maior que 80% e teor de Mg maior que 1,0{' '}
    //           {renderUnity('cmol', isPrint)}
    //         </Text>
    //       </ReportItemResponse>
    //     </>
    //   )
    case Fields.tomate:
      return (
        <div style={styling.groupFertilizing}>
          <Text size={sizeMain}>Calagem: </Text>

          <Text size={sizeMain}>
            O solo deve estar com o pH igual ou próximo de 6,0. De preferência
            corretivo com a relação Ca/Mg entre 3:1 e 5:1, para aumentar a
            absorção de cálcio
          </Text>
        </div>
      )
    case Fields.mandioca:
      return (
        <div style={styling.groupFertilizing}>
          <Text size={sizeMain}>Calagem: </Text>

          <Text size={sizeMain}>
            A calagem não é indicada para a correção da acidez do solo na
            cultura da mandioca. Entretanto, quando o teor de cálcio ou de
            magnésio trocáveis for menor que 2,0 ou 0,5{' '}
            {renderUnity('cmol', isPrint)} , respectivamente, aplicar uma
            tonelada de calcário dolomítico por hectare por ocasião no pre paro
            do solo.
          </Text>
        </div>
      )
    case Fields.abacaxi:
    case Fields.maracuja:
      return (
        <div style={styling.groupFertilizing}>
          <Text size={sizeMain}>Calagem: </Text>

          <Text size={sizeMain}>
            A calagem deve ser feita no mínimo três meses antes da instalação do
            pomar. O solo deve estar com o pH igual ou próximo de 5,5 com
            incorporação na camada de zero a 20 cm de profundidade. De
            preferência, utilizar calcário dolomítico.
          </Text>
        </div>
      )
    case Fields.eucalipto:
      return (
        <div style={styling.groupFertilizing}>
          <Text size={sizeMain}>Calagem: </Text>

          <Text size={sizeMain}>
            O solo deve estar com o pH igual ou próximo de 5,5 e a saturação por
            bases a 65%.
          </Text>
        </div>
      )

    default:
      return undefined
  }
}

export const renderTextNitrogenio = (
  culture: string,
  oc: ICultureObjective[],
  isPrint?: boolean,
): any => {
  const sizeMain = isPrint ? 'xxs' : 'sm'

  const propertyDesignationAbacaxi = oc.find(
    (c) => c.culture === Fields.abacaxi,
  )?.property_designation

  switch (culture) {
    case Fields.arrozDeSequeiro:
      return (
        <Text size={sizeMain}>
          Aplicar na semeadura 10 kg de {renderUnity('nha', isPrint)} e o
          restante na cobertura, aos 40 dias após a emergência.{' '}
        </Text>
      )
    case Fields.feijao:
      return (
        <>
          <Text size={sizeMain}>
            Para rendimento maior do que 1,5 {renderUnity('tha', isPrint)},
            acrescentar 20 kg de {renderUnity('nha', isPrint)}, por tonelada
            adicional de grãos a serem produzidos.
          </Text>
          <div>
            <ul>
              <li>
                <Text size={sizeMain}>
                  Inocular as sementes com inoculante de boa qualidade, com a
                  estirpe recomendada. Nodulação ausente ou insuficiente (≤ 20
                  nódulos por planta), realizar adubação de cobertura com N,
                  cerca de 3 semanas após a emergência das plantas.
                </Text>
              </li>
              <li>
                <Text size={sizeMain}>
                  Nodulação insatisfatória geralmente é observada em solos
                  degradados, mesmo após a correção da acidez do solo.
                </Text>
              </li>
            </ul>
          </div>
        </>
      )
    case Fields.milho:
      return (
        <>
          <Text size={sizeMain}>
            Para rendimento maior do que 4 {renderUnity('tha', isPrint)},
            acrescentar 15 kg de {renderUnity('nha', isPrint)}, por tonelada
            adicional de grãos a serem produzidos.
          </Text>
          <div>
            <ul>
              <li>
                <Text size={sizeMain}>
                  Aplicar entre 10 e 30 kg de {renderUnity('nha', isPrint)} na
                  semeadura, dependendo da expectativa de rendimento, e o
                  restante em cobertura a lanço ou no sulco, quando as plantas
                  estão com 4 a 8 folhas ou com 40 a 60 cm de altura.
                </Text>
              </li>
              <li>
                <Text size={sizeMain}>
                  Em condições de chuvas intensas ou se a dose de N for elevada
                  pode-se fracionar a aplicação em duas partes com intervalos de
                  15 a 30 dias.
                </Text>
              </li>
            </ul>
          </div>
        </>
      )
    case Fields.soja:
      return (
        <Text size={sizeMain}>
          Não é recomendada a adubação nitrogenada devido à eficiência da
          fixação biológica de N do ar por estirpes de rizóbio. A inoculação
          deve ser feita à sombra e o inoculante deve ser mantido em temperatura
          de aproximadamente 25ºC.
        </Text>
      )

    case Fields.sorgo:
      return (
        <>
          <Text size={sizeMain}>
            Para rendimento maior que 3 {renderUnity('tha', isPrint)},
            acrescentar 15 kg de {renderUnity('nha', isPrint)}, por tonelada
            adicional de grãos a serem produzidos.
          </Text>
          <div>
            <ul>
              <li>
                <Text size={sizeMain}>
                  Aplicar 20 kg de {renderUnity('nha', isPrint)} na semeadura e
                  o restante em cobertura, quando as plantas estiverem com cinco
                  a sete folhas (aproximadamente 30 a 35 dias após a
                  emergência), antes do início da diferenciação do primórdio
                  floral.
                </Text>
              </li>
              <li>
                <Text size={sizeMain}>
                  A adubação nitrogenada em cobertura pode ser parcial ou
                  totalmente suprimida, dependendo das condições de clima.
                </Text>
              </li>
            </ul>
          </div>
        </>
      )
    case Fields.gramineas:
      return (
        <>
          <Text size={sizeMain}>
            Para rendimento maior que 8 {renderUnity('tha', isPrint)} (anuais) e
            12 {renderUnity('tha', isPrint)} (perenes, a partir do 2º ano),
            acrescentar 30 kg de {renderUnity('nha', isPrint)}, por tonelada
            adicional de massa seca a ser produzida.
          </Text>
          <div>
            <ul>
              <li>
                <Text size={sizeMain}>
                  Aplicar 20 kg de {renderUnity('nha', isPrint)} na semeadura ou
                  plantio e o restante, em duas a quatro vezes, dependendo da
                  dose, no perfilhamento e após a utilização da pastagem.
                </Text>
              </li>
              <li>
                <Text size={sizeMain}>
                  Solos com teor da matéria orgânica {' < '} 5,0%, suprimir a
                  adubação nitrogenada no plantio, sendo a dose parcelada em
                  partes iguais, aplicadas conforme referido acima.
                </Text>
              </li>
            </ul>
          </div>
        </>
      )
    case Fields.abobora:
    case Fields.aboboraMoranga:
      return (
        <Text size={sizeMain}>
          Aplicar a metade do N na semeadura e o restante em cobertura, 30 dias
          mais tarde
        </Text>
      )
    case Fields.alface:
    case Fields.chicoria:
    case Fields.almeirao:
    case Fields.rucula:
      return (
        <Text size={sizeMain}>
          Aplicar ¼ da dose de N no transplante, ¼ aos 15 dias, ¼ aos 30 dias e
          o restante duas semanas mais tarde. Aplicar 15 kg de{' '}
          {renderUnity('nha', isPrint)} após cada colheita.
        </Text>
      )
    case Fields.beterraba:
    case Fields.cenoura:
      return (
        <Text size={sizeMain}>
          Aplicar 1/3 da dose de N na semeadura e parcelar o restante em duas
          vezes: aproximadamente 30 e 45 dias após o plantio, dependendo das
          condições locais.
        </Text>
      )
    case Fields.melancia:
    case Fields.melao:
      return (
        <Text size={sizeMain}>
          Aplicar a metade da dose de N na semeadura e o restante em cobertura,
          30 dias mais tarde.
        </Text>
      )
    case Fields.pimentao:
      return (
        <Text size={sizeMain}>
          Aplicar, no transplante, aproximadamente 20 kg de N/ha e parcelar o
          restante em duas vezes, aos 20 e aos 40 dias dessa data
        </Text>
      )
    case Fields.batataDoce:
      return (
        <Text size={sizeMain}>
          Aplicar 10 kg de {renderUnity('nha', isPrint)} no plantio e o restante
          em cobertura, aproximadamente aos 30 dias após a brotação, quando
          utilizada a batata, ou 30 dias após o transplante, quando utilizadas
          mudas.
        </Text>
      )
    case Fields.tomate:
      return (
        <Text size={sizeMain}>
          Aplicar 2/3 da dose de N (junto com o P e o K) no sulco, a
          aproximadamente duas semanas antes do plantio e o restante 15 a 20
          dias após o transplante das mudas (amontoa). Para teores de matéria
          orgânica maiores que 5,0 as doses p odem ser diminuídas.
        </Text>
      )
    case Fields.maracuja:
      return (
        <Text size={sizeMain}>
          No plantio, aplicar por planta de 10 a 20 litros de esterco, se
          disponível. A aplicação deve ser feita ao redor do berço de plantio
          com incorporação.
        </Text>
      )
    case Fields.batata:
      return (
        <Text size={sizeMain}>
          Aplicar a metade da quantidade de N no plantio e o restante, a
          aproximadamente 30 dias após a emergência.
        </Text>
      )
    case Fields.abacaxi:
      return (
        <>
          {propertyDesignationAbacaxi === 'Primeira safra' && (
            <Text size={sizeMain}>
              De 1 a 3 meses após o plantio aplicar{' '}
              <Text as="strong" size={sizeMain}>
                {renderSwitchAbacaxi('E1')}
              </Text>{' '}
              gramas de N por planta <br />
              De 5 a 6 meses após o plantio aplicar{' '}
              <Text as="strong" size={sizeMain}>
                {renderSwitchAbacaxi('E2')}
              </Text>{' '}
              gramas de N por planta
              <br />
              Em 3 meses após a indução floral aplicar{' '}
              <Text as="strong" size={sizeMain}>
                {renderSwitchAbacaxi('E3')}
              </Text>{' '}
              gramas de N por planta <br />
            </Text>
          )}
          {propertyDesignationAbacaxi === 'Segunda safra' && (
            <Text size={sizeMain}>
              De 1 a 3 meses após a colheita da primeira safra aplicar{' '}
              <Text as="strong" size={sizeMain}>
                {renderSwitchAbacaxi('E4')}
              </Text>
              gramas de N por planta
              <br />
              Em 3 meses após a indução floral aplicar{' '}
              <Text as="strong" size={sizeMain}>
                {renderSwitchAbacaxi('E5')}
              </Text>{' '}
              gramas de N por planta
              <br />
            </Text>
          )}
        </>
      )
    case Fields.canaDeAcucar:
      return (
        <Text size={sizeMain}>
          Aplicar de 10 a 20 kg de N há - 1 no plantio e o restante em cobertura
          antes do fechamento do canavial (aproximadamente entre 90 e 100 dias
          após o plantio)
        </Text>
      )
    case 'Não recomendado':
      return ''

    default:
      return ''
  }
}

export const renderTextFosforoPotassio = (
  culture: string,
  isPrint?: boolean,
): any => {
  const sizeMain = isPrint ? 'xxs' : 'sm'

  switch (culture) {
    case Fields.arrozDeSequeiro:
      return (
        <Text size={sizeMain}>
          Para rendimento maior do que 2 {renderUnity('tha', isPrint)},
          acrescentar 10 kg de {renderUnity('p2o5', isPrint)}{' '}
          {renderUnity('ha', isPrint)} e 10 kg de {renderUnity('k2o', isPrint)}{' '}
          {renderUnity('ha', isPrint)}, por tonelada adicional de grãos a serem
          produzidos.
        </Text>
      )

    case Fields.feijao:
      return (
        <Text size={sizeMain}>
          Para rendimento maior do que 1,5 {renderUnity('tha', isPrint)},
          acrescentar 15 kg de {renderUnity('p2o5', isPrint)}{' '}
          {renderUnity('ha', isPrint)} e 20 Kg de {renderUnity('k2o', isPrint)}{' '}
          {renderUnity('ha', isPrint)}, por tonelada adicional de grãos a serem
          produzidos.
        </Text>
      )

    case Fields.milho:
      return (
        <Text size={sizeMain}>
          Para rendimento maior do que 4 {renderUnity('tha', isPrint)},
          acrescentar 15 kg de {renderUnity('p2o5', isPrint)}{' '}
          {renderUnity('ha', isPrint)} e 10 kg de {renderUnity('k2o', isPrint)}{' '}
          {renderUnity('ha', isPrint)}, por tonelada adicional de grãos a serem
          produzidos.
        </Text>
      )

    case Fields.soja:
      return (
        <Text size={sizeMain}>
          Para rendimento maior do que 2 {renderUnity('tha', isPrint)},
          acrescentar 15 kg de {renderUnity('p2o5', isPrint)}{' '}
          {renderUnity('ha', isPrint)} e 25 kg de {renderUnity('k2o', isPrint)}{' '}
          {renderUnity('ha', isPrint)}, por tonelada adicional de grãos a serem
          produzidos.
        </Text>
      )

    case Fields.sorgo:
      return (
        <Text size={sizeMain}>
          Para rendimento maior do que 3 {renderUnity('tha', isPrint)},
          acrescentar 15 kg de {renderUnity('p2o5', isPrint)}{' '}
          {renderUnity('ha', isPrint)} e 10 kg de {renderUnity('k2o', isPrint)}{' '}
          {renderUnity('ha', isPrint)}, por tonelada adicional de grãos a serem
          produzidos.
        </Text>
      )

    case Fields.gramineas:
      return (
        <>
          <Text size={sizeMain}>
            Para rendimento maior que 8 {renderUnity('tha', isPrint)} (anuais) e
            12 {renderUnity('tha', isPrint)} (perenes, a partir do 2º ano),
            acrescentar 10 kg de {renderUnity('p2o5', isPrint)}{' '}
            {renderUnity('ha', isPrint)} e 20 kg de{' '}
            {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}, por
            tonelada adicional de massa seca a ser produzida.
          </Text>
          <div>
            <ul>
              <li>
                <Text size={sizeMain}>
                  Pastagem destinada ao corte para outro tipo de utilização
                  (feno, silagem, etc.), aumentar em 50% as doses de fósforo e
                  de potássio indicadas para o ano ou cultivo subsequente.
                </Text>
              </li>
            </ul>
          </div>
        </>
      )

    case Fields.abobora:
    case Fields.aboboraMoranga:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes, aplicar 100 kg de{' '}
          {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 60 kg de{' '}
          {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}.
        </Text>
      )

    case Fields.alface:
    case Fields.chicoria:
    case Fields.rucula:
    case Fields.almeirao:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes, aplicar 70 kg de{' '}
          {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 120 kg
          de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}.
        </Text>
      )

    case Fields.alho:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes:
          <br />
          Para{' '}
          <Text as="strong" size={sizeMain}>
            6 a 8
          </Text>{' '}
          {renderUnity('tha', isPrint)} aplicar 60 kg de{' '}
          {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 100 kg
          de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}; <br />
          Para{' '}
          <Text as="strong" size={sizeMain}>
            9 a 11
          </Text>{' '}
          {renderUnity('tha', isPrint)} aplicar 80 kg de{' '}
          {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 120 kg
          de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}; <br />
          Para{' '}
          <Text as="strong" size={sizeMain}>
            12 a 15
          </Text>{' '}
          {renderUnity('tha', isPrint)} aplicar 100 kg de{' '}
          {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 140 kg
          de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}
        </Text>
      )

    case Fields.beterraba:
    case Fields.cenoura:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes, aplicar 100 kg de{' '}
          {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 100 kg
          de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}
        </Text>
      )

    case Fields.melancia:
    case Fields.melao:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes, aplicar 100 kg de{' '}
          {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 150 kg
          de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}.
        </Text>
      )

    case Fields.pimentao:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes, adicionar 100 kg de{' '}
          {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 150 kg
          de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}.
        </Text>
      )

    case Fields.batataDoce:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes, aplicar 50 kg de{' '}
          {renderUnity('p2o5', isPrint)}/ha e 80 kg de{' '}
          {renderUnity('k2o', isPrint)}
          /ha.
        </Text>
      )

    case Fields.pepino:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes , aplicar para o pepino tipo conserva, 120
          kg de {renderUnity('p2o5', isPrint)} e 100 kg de{' '}
          {renderUnity('k2o', isPrint)} ; para o pepino Para salada em sistema
          tutorado, com irrigação, aplicar 260 kg de
          {renderUnity('p2o5', isPrint)} e 200 kg de{' '}
          {renderUnity('k2o', isPrint)}.
        </Text>
      )

    case Fields.tomate:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes , aplicar para 50 t ha - 1 = 200 kg de{' '}
          {renderUnity('p2o5', isPrint)}; para 75 {renderUnity('tha', isPrint)}{' '}
          = 250 kg de {renderUnity('p2o5', isPrint)}; e para 100{' '}
          {renderUnity('tha', isPrint)} = 300 kg de{' '}
          {renderUnity('p2o5', isPrint)}
        </Text>
      )

    case Fields.maracuja:
      return (
        <Text size={sizeMain}>
          Os adubos de crescimento e de manutenção devem ser distribuídos ao
          redor das plantas, sob a projeção da copa, formando uma coroa
          distanciada de 20 cm do tronco. Os fertilizantes nitrogenado e
          potássico devem ser aplicados parceladamente, em doses iguais. A dose
          anual de adubo fosfatado deve ser aplicada totalmente
        </Text>
      )

    case Fields.batata:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes , aplicar 120 ou 140 kg de{' '}
          {renderUnity('p2o5', isPrint)} e 120 ou 140 kg de{' '}
          {renderUnity('k2o', isPrint)} , conforme a expectativa de rendimento.
        </Text>
      )

    case Fields.mandioca:
      return (
        <Text size={sizeMain}>
          Nos cultivos subsequentes , aplicar 30 kg de{' '}
          {renderUnity('p2o5', isPrint)}/ha e 20 a 40 kg de{' '}
          {renderUnity('k2o', isPrint)}/ha.
        </Text>
      )

    case Fields.abacaxi:
      return (
        <>
          <Text size={sizeMain}>
            Fazer a adubação fosfatada de 15 a 30 dias antes do plantio, com
            incorporação, na camada arável. A segunda aplicação deve ser feita
            em cobertura imediatamente após a 1ª colheita, numa faixa distante
            até 5 cm das plantas.
          </Text>
          <Text size={sizeMain}>
            A adubação potássica deve ser parcelada, aplicando - se 20% da
            necessidade anual um mês após o plantio, 50% seis meses após o
            plantio e o restante 90 dias após a indução floral. Na 2ª safra,
            aplicar 50% da dose após a primeira colheita e o restante após a
            indução floral.
          </Text>
          <Text size={sizeMain}>
            O potássio deve ser aplicado, de preferência, na forma de sulfato,
            já que o cloreto prejudica a qualidade dos frutos. As adu bações de
            crescimento e manutenção devem ser localizadas próximo a cada
            planta, aplicando parte do adubo nas axilas das folhas basais. Não
            colocá - lo na roseta basal.
          </Text>
        </>
      )

    case Fields.eucalipto:
      return (
        <>
          <Text as="strong" size={sizeMain}>
            Adubação de plantio
          </Text>
          <Text size={sizeMain}>
            Pode ser feita no berço ou no sulco de plantio. No primeiro caso, o
            adubo deve ser colocado no fundo do berço antes do plantio, bem
            misturado com o solo para evitar danos à raiz das mudas. No segundo
            caso, o adubo é distribuído no fundo do sulco de plantio, aberto
            pelo sulcador.
          </Text>
          <br />
          <Text as="strong" size={sizeMain}>
            Adubação de cobertura e de reposição
          </Text>
          <Text size={sizeMain}>
            A adubação de cobertura é indicada para complementa r a adubação de
            plantio. No caso de não ser feita a adubação de cobertura, as
            quantidades recomendadas para plantio e cobertura devem ser
            aplicadas no plantio. A adubação de cobertura é feita ent re três e
            seis meses após o plantio. O adubo é distribuído ao lado das
            plantas, em faixas ou em coroamento. Após a aplicação é recomendado
            cobri - lo com solo .
          </Text>
          <Text size={sizeMain}>
            O potássio deve ser aplicado, de preferência, na forma de sulfato,
            já que o cloreto prejudica a qualidade dos frutos. As adu bações de
            crescimento e manutenção devem ser localizadas próximo a cada
            planta, aplicando parte do adubo nas axilas das folhas basais. Não
            colocá - lo na roseta basal.
          </Text>
          <Text size={sizeMain}>
            A adubação de reposição é feita após o corte e a retirada de madeira
            por ocasião do desbaste
          </Text>
        </>
      )

    case Fields.canaDeAcucar:
      return (
        <Text size={sizeMain}>
          Em solos arenosos, recomenda - se fracionar a adubação potássica,
          tanto na cana - planta como na cana - soca, aplicando - se 2/3 por
          ocasião do plantio ou após o corte e o restante em cobertura,
          juntamente com o nitrogênio
        </Text>
      )

    default:
      return ''
  }
}

export const renderThaExpec = (
  oc: ICultureObjective[],
  type: string,
  isPrint?: boolean,
): any => {
  const af = oc.find((a: any) => a)
  const sizeMain = isPrint ? 'xxs' : 'sm'

  if (!af) {
    return false
  }

  switch (type) {
    case 'n_nitron_tha':
      return af.n_nitron_tha
    case 'p_phosphor_tha':
      switch (af.p_phosphor_tha) {
        case '6 a 8':
          return (
            <Text size={sizeMain}>
              Para{' '}
              <Text as="strong" size={sizeMain}>
                {af.p_phosphor_tha}
              </Text>{' '}
              {renderUnity('tha', isPrint)} aplicar 60 kg de{' '}
              {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 100
              kg de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}
            </Text>
          )
        case '9 a 11':
          return (
            <Text size={sizeMain}>
              Para{' '}
              <Text as="strong" size={sizeMain}>
                {af.p_phosphor_tha}
              </Text>{' '}
              {renderUnity('tha', isPrint)} aplicar 80 kg de{' '}
              {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 120
              kg de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}
            </Text>
          )
        case '12 a 15':
          return (
            <Text size={sizeMain}>
              Para{' '}
              <Text as="strong" size={sizeMain}>
                {af.p_phosphor_tha}
              </Text>{' '}
              {renderUnity('tha', isPrint)} aplicar 100 kg de{' '}
              {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 140
              kg de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}
            </Text>
          )
        default:
          return false
      }

    case 'k_potassium_tha':
      switch (af.k_potassium_tha) {
        case '6 a 8':
          return (
            <Text size={sizeMain}>
              Para{' '}
              <Text as="strong" size={sizeMain}>
                {af.k_potassium_tha}
              </Text>{' '}
              {renderUnity('tha', isPrint)} aplicar 60 kg de{' '}
              {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 100
              kg de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}
            </Text>
          )
        case '9 a 11':
          return (
            <Text size={sizeMain}>
              Para{' '}
              <Text as="strong" size={sizeMain}>
                {af.k_potassium_tha}
              </Text>{' '}
              {renderUnity('tha', isPrint)} aplicar 80 kg de{' '}
              {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 120
              kg de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}
            </Text>
          )
        case '12 a 15':
          return (
            <Text size={sizeMain}>
              Para{' '}
              <Text as="strong" size={sizeMain}>
                {af.k_potassium_tha}
              </Text>{' '}
              {renderUnity('tha', isPrint)} aplicar 100 kg de{' '}
              {renderUnity('p2o5', isPrint)} {renderUnity('ha', isPrint)} e 140
              kg de {renderUnity('k2o', isPrint)} {renderUnity('ha', isPrint)}
            </Text>
          )
        default:
          return false
      }

    default:
      return false
  }
}
