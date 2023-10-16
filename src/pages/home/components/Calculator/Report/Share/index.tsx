import { FaPrint, FaShareSquare, FaWhatsapp } from 'react-icons/fa'
import { IReportDTO } from '../../dtos/report.dto'
import ReactInputMask from 'react-input-mask'
import {
  BtnShare,
  ShareBox,
  ShareContainer,
  ShareItem,
  Whatsapp,
} from './styles'
import ReactToPrint, { useReactToPrint } from 'react-to-print'
import { useCallback, useRef, useState } from 'react'
import { removeMask } from '@/utils/formatMask'
import { Text } from '@alosix-hub-ui/react'
import Printer from './Printer'

interface ShareProps {
  report: IReportDTO
}

export function Share({ report }: ShareProps) {
  const componentRef = useRef<HTMLDivElement>(null)

  const [mask, setMask] = useState('')
  const [zap, setZap] = useState(false)

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const reactToPrintContent = useCallback(() => {
    return componentRef.current
  }, [])

  const handlewhatsapp = useCallback(() => {
    const phone = removeMask(mask)

    const link = `${process.env.NEXT_PUBLIC_URL}/public/${report.id}`
    const url = `https://api.whatsapp.com/send?phone=55${phone}&text=${link}`

    window.open(url, '_blank')

    setTimeout(() => setZap(false), 1000)
  }, [mask, report])

  const handleMask = useCallback((e: any) => {
    const { value } = e.target
    return setMask(value)
  }, [])

  return (
    <ShareContainer>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle="AwesomeFileName"
        removeAfterPrint
        copyStyles={true}
      />
      <Printer ref={componentRef} report={report} key={report.id} />

      <Text as="span">Compartilhar:</Text>

      <ShareBox>
        <ShareItem>
          <BtnShare type="button" onClick={handlePrint}>
            <FaPrint />
          </BtnShare>
        </ShareItem>
        <ShareItem>
          <BtnShare type="button" onClick={() => setZap(!zap)}>
            <FaWhatsapp />
          </BtnShare>

          {zap && (
            <Whatsapp>
              <ReactInputMask
                value={mask}
                placeholder="número do whatsapp"
                onChange={(e) => handleMask(e)}
                mask="(99) 99999-9999"
              />

              <button type="button" onClick={() => handlewhatsapp()}>
                <FaShareSquare size={18} />
              </button>
            </Whatsapp>
          )}
        </ShareItem>
      </ShareBox>
    </ShareContainer>
  )
}
