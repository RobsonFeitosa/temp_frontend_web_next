import { GetStaticPaths, GetStaticProps } from 'next'
import { Container } from 'react-bootstrap'
import logoImg from '@/assets/logo-alosix-default.svg'
import { useGetByIdSample } from '@/hooks/useGetByIdSample'
import { useEffect } from 'react'
import ReportSingle from '@/pages/home/components/Calculator/Report/ReportSingle'
import Image from 'next/image'

import { Logo, PublicReportContainer } from './styles'
import Link from 'next/link'
import { Bibliografy } from '@/pages/home/components/Calculator/Report/Bibliografy'

interface SampleDisplayProps {
  id: string
}

export default function PublicReport({ id }: SampleDisplayProps) {
  const { data: reportsData, refetch: getByIdSamples } = useGetByIdSample(id)

  useEffect(() => {
    getByIdSamples()
  }, [getByIdSamples])

  const report = reportsData?.data

  return (
    <PublicReportContainer>
      <Container>
        <Logo>
          <Link href="/">
            <Image
              src={logoImg}
              width={190}
              height={98}
              quality={100}
              priority
              alt=""
            />
          </Link>
        </Logo>
        {report && <ReportSingle report={report} />}

        <div>
          <Bibliografy />
        </div>
      </Container>
    </PublicReportContainer>
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

  return {
    props: {
      id: sampleId,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
