import { ReactNode } from 'react'
import Image from 'next/image'

import LogoText from '@/assets/logo-alosix-text.svg'

import {
  AdminAside,
  AdminContainer,
  AdminContent,
  AdminHeader,
  AdminWrapper,
} from './styles'
import Link from 'next/link'

interface AdminProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminProps) {
  return (
    <AdminContainer>
      <AdminHeader>
        <Link href="admin">
          <Image src={LogoText} width={160} height={52} alt="" />
        </Link>
      </AdminHeader>

      <AdminWrapper>
        <AdminAside>
          <ul>
            <li>
              <Link href="/admin">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/transactions">Transaćões</Link>
            </li>
          </ul>
        </AdminAside>

        <AdminContent>{children}</AdminContent>
      </AdminWrapper>
    </AdminContainer>
  )
}
