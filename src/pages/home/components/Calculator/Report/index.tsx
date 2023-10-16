import {
  BibliografyContainer,
  Header,
  ReportContainer,
  ReportMiddle,
} from './styles'
import { IReportDTO } from '../dtos/report.dto'
import { Text } from '@alosix-hub-ui/react'

import Link from 'next/link'
import { Bibliografy } from './Bibliografy'
import ReportSingle from './ReportSingle'

interface ReportProps {
  reports: IReportDTO[]
}

export function Report({ reports }: ReportProps) {
  return (
    <ReportContainer id="report">
      <Header>
        <Text>Análise da amostra</Text>
        <Link href="/dashboard">[ todas as amostras ]</Link>
      </Header>

      <ReportMiddle>
        {reports.map((report: IReportDTO, index: number) => {
          return <ReportSingle report={report} index={index} key={report.id} />
        })}
      </ReportMiddle>

      <BibliografyContainer>
        <Bibliografy />
      </BibliografyContainer>
    </ReportContainer>
  )
}
