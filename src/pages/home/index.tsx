import { useEffect, useState } from 'react'
import { Dialog, DialogRoot } from '@alosix-hub-ui/react'

import Calculator from './components/Calculator'
import MainLayout from '@/components/components/Layout/Main'
import { AccessAccountModal } from '../signin/AccessAccountModal'
import { PixModal } from '@/components/PixModal'
import { useOrder } from '@/hooks/providers/order'
import { Congratulations } from '@/components/Congratulations'
import { useAuth } from '@/hooks/providers/auth'
import ForgotRequest from '../signin/ForgotRequest'

type ContainerAccount = HTMLElement | null | undefined

export default function Home() {
  const { user } = useAuth()
  const { resetAllOrders, setEmptyOrder, setOpenModalAccount, order } =
    useOrder()

  const {
    config: { pixQRCodeURL, paid },
    isOpenModalAccount,
  } = order

  const [openPix, setOpenPix] = useState(!!pixQRCodeURL)
  const [openCongratulations, setIsOpenCongratulations] = useState(false)
  const [container, setContainer] = useState<ContainerAccount>(null)
  const [openForgotSend, setOpenForgotSend] = useState(false)

  useEffect(() => {
    !user && setOpenModalAccount(true)
  }, [user, setOpenModalAccount])

  function handleCancelPix() {
    resetAllOrders()
    setOpenPix(false)
  }

  useEffect(() => {
    paid &&
      setTimeout(() => {
        setIsOpenCongratulations(true)
      }, 800)

    setTimeout(() => {
      setIsOpenCongratulations(false)
    }, 15000)
  }, [paid, resetAllOrders])

  useEffect(() => {
    setOpenPix(!!pixQRCodeURL)
  }, [pixQRCodeURL])

  useEffect(() => {
    setEmptyOrder()
  }, [setEmptyOrder])

  return (
    <>
      <DialogRoot open={isOpenModalAccount}>
        <Dialog container={container} offClosed title="Acessar conta">
          <AccessAccountModal
            onOpenForgotModal={() => setOpenForgotSend(true)}
            onClose={() => setOpenModalAccount(false)}
          />
        </Dialog>
      </DialogRoot>

      <DialogRoot open={openPix}>
        <Dialog container={container} offClosed title="PAGAMENTO PIX">
          <PixModal onClose={() => handleCancelPix()} />
        </Dialog>
      </DialogRoot>

      <DialogRoot open={openCongratulations}>
        <Dialog container={container} offClosed title="Parabéns">
          <Congratulations onClose={() => setIsOpenCongratulations(false)} />
        </Dialog>
      </DialogRoot>

      <DialogRoot open={openForgotSend}>
        <Dialog offClosed title="Esqueci minha senha">
          <ForgotRequest onClose={() => setOpenForgotSend(false)} />
        </Dialog>
      </DialogRoot>

      <MainLayout>
        <Calculator />
      </MainLayout>

      <div id="dialog-custom" ref={setContainer} />
    </>
  )
}
