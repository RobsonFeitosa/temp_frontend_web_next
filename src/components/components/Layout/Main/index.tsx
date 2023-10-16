import { ReactNode } from 'react'
import { Footer } from '@/pages/home/components/Footer'
import { Header } from '@/pages/home/components/Header'

interface MainProps {
  children: ReactNode
}
export default function MainLayout({ children }: MainProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
