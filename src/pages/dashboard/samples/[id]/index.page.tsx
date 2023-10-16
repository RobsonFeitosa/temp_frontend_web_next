import DashboardLayout from '@/components/components/Layout/Dashboard'
import MainLayout from '@/components/components/Layout/Main'
import ReportSingle from '@/pages/home/components/Calculator/Report/ReportSingle'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container } from 'react-bootstrap'
import { SampleDisplayContainer } from './styles'
import { Bibliografy } from '@/pages/home/components/Calculator/Report/Bibliografy'
import { useGetByIdSample } from '@/hooks/useGetByIdSample'
import { useEffect } from 'react'
import { parseCookies } from 'nookies'

interface SampleDisplayProps {
  id: string
}

export default function SampleDisplay({ id }: SampleDisplayProps) {
  const { data: reportsData, refetch: getByIdSamples } = useGetByIdSample(id)

  useEffect(() => {
    getByIdSamples()
  }, [getByIdSamples])

  const report = reportsData?.data

  return (
    <MainLayout>
      <Container>
        <DashboardLayout>
          <SampleDisplayContainer>
            {report && <ReportSingle report={report} />}
            <Bibliografy />
          </SampleDisplayContainer>
        </DashboardLayout>
      </Container>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sampleId = String(params?.id)

  const { '@Alosix:user': userOnCookies } = parseCookies()

  const user = userOnCookies ? JSON.parse(userOnCookies) : null

  return {
    props: {
      id: sampleId,
      user,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
