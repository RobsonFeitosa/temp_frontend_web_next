import { useEffect } from 'react'
import DashboardLayout from '@/components/components/Layout/Dashboard'
import { MdFindInPage } from 'react-icons/md'
import MainLayout from '@/components/components/Layout/Main'
import { Heading, Text } from '@alosix-hub-ui/react'
import { Col, Container, Row } from 'react-bootstrap'
import { Share } from '@/pages/home/components/Calculator/Report/Share'
import formatDate from '@/utils/formatDate'
import { IReportDTO } from '@/pages/home/components/Calculator/dtos/report.dto'
import Link from 'next/link'
import NavSettings from './NavSettings'
import { useDeleteSample } from '@/pages/home/components/Calculator/components/ContentSamples/hooks/useDeleteSample'
import { useGetSamples } from '@/hooks/useGetSamples'
import { useAuth } from '@/hooks/providers/auth'
import { useOrder } from '@/hooks/providers/order'

import {
  BtnAddingNewCalculation,
  HeadTop,
  Header,
  ReportEmpty,
  SampleAction,
  SampleShared,
  SampleWrapper,
  SamplesContainer,
  SamplesContent,
  SamplesItem,
} from './styles'

export default function Samples() {
  const { user } = useAuth()

  const {
    metaSample: { total },
  } = useOrder()

  const { data: samplesData, refetch: getSamples } = useGetSamples({
    limit: 6,
    page: 1,
  })

  const { mutateAsync } = useDeleteSample()

  function handleRemoveSample(id: string) {
    mutateAsync(id)
  }

  useEffect(() => {
    user && getSamples()
  }, [getSamples, user])

  const isEmpty = total === 0

  return (
    <div>
      <MainLayout>
        <Container>
          <DashboardLayout>
            <SamplesContainer>
              <Header>
                <Heading as="h5">Minhas amostras</Heading>-
                <Text as="span" size="sm">
                  Total: {total}
                </Text>
              </Header>
              <SamplesContent>
                <Row>
                  {samplesData?.data.data.map((report: IReportDTO) => (
                    <Col xs lg="4" key={report.id}>
                      <SamplesItem>
                        <SampleWrapper>
                          <HeadTop>
                            <Text as="span">
                              N.A:{' '}
                              <Text as="strong">{report.id.slice(0, 11)}</Text>
                            </Text>

                            <NavSettings
                              reportId={report.id}
                              onRemoveSample={() =>
                                handleRemoveSample(report.id)
                              }
                            />
                          </HeadTop>
                          <Heading as="h3">
                            Planta de cobertura:{' '}
                            <Text as="strong">{report.description_cuture}</Text>
                          </Heading>
                          <Text as="span">
                            Região: {report.city} / {report.uf}
                          </Text>
                          <Text as="span">
                            Analisado:{' '}
                            {formatDate({
                              date: report.created_at,
                              hoursView: true,
                            })}{' '}
                            h
                          </Text>
                        </SampleWrapper>
                        <SampleAction>
                          <SampleShared>
                            {' '}
                            <Share report={report} />{' '}
                          </SampleShared>
                          <Link href={`dashboard/samples/${report.id}`}>
                            <MdFindInPage size={22} />
                            Ver relatório
                          </Link>
                        </SampleAction>

                        {/* TODO: CONCLUIR ESSE COMPONENTE MAIS PRA FRENTE */}
                        <BtnAddingNewCalculation
                        // onClick={() => handleRequestOptionsCalculation(report.id)}
                        >
                          Adicionar novas opções de cálculos
                        </BtnAddingNewCalculation>
                      </SamplesItem>
                    </Col>
                  ))}

                  {isEmpty && (
                    <Col lg="12">
                      <ReportEmpty>
                        <Text>Não tem registro de amostras calculadas </Text>
                        <Link href="/">Calcule amostras, agora!</Link>
                      </ReportEmpty>
                    </Col>
                  )}
                </Row>
              </SamplesContent>
            </SamplesContainer>
          </DashboardLayout>
        </Container>
      </MainLayout>
    </div>
  )
}
