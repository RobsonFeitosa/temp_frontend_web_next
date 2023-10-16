import { ReactNode, useState } from 'react'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { FaUserCog, FaVial, FaSignOutAlt, FaEllipsisH } from 'react-icons/fa'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import {
  Asidebar,
  DashBoardHeading,
  DashboardContainer,
  DashboardContent,
  LeftSideBar,
  Li,
  NavAccountMobile,
} from './styles'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/providers/auth'

const pages = [
  {
    label: 'Amostras',
    icon: <FaVial />,
    path: '/dashboard',
    visibility: true,
  },
  {
    label: 'Pedidos',
    icon: <BsFillBagCheckFill />,
    path: '/dashboard/orders',
    visibility: false,
  },
  {
    label: 'Cadastro',
    icon: <FaUserCog />,
    path: '/dashboard/register',
    visibility: true,
  },
  {
    label: 'Sair',
    icon: <FaSignOutAlt />,
    path: undefined,
    visibility: true,
  },
]

interface MainProps {
  children: ReactNode
}
export default function DashboardLayout({ children }: MainProps) {
  const { signOut } = useAuth()
  const router = useRouter()
  const [navMob, setNavMob] = useState(false)

  const pathRouter = router.route

  function handleLogout() {
    signOut()
    router.push('/')
  }

  // TODO: Ocultar temporariamente
  // pages[1].visibility = total !== 0

  return (
    <>
      <DashboardContainer>
        <Row>
          <Col lg="12">
            <DashBoardHeading as="h2">Meu painel</DashBoardHeading>
          </Col>
          <LeftSideBar>
            <NavAccountMobile>
              <button
                type="button"
                className="btnMob"
                onClick={() => setNavMob(!navMob)}
              >
                <FaEllipsisH size={22} /> Menu
              </button>
              {navMob && (
                <ul>
                  {pages.map(({ icon, label, path, visibility }) => (
                    <li
                      key={label}
                      style={{ display: visibility ? 'flex' : 'none' }}
                    >
                      {path ? (
                        <Link href={path}>
                          {icon}
                          {label}
                        </Link>
                      ) : (
                        <button type="button" onClick={() => handleLogout()}>
                          {icon}
                          {label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </NavAccountMobile>
          </LeftSideBar>
          <Col xs="12" sm="12" md="3" lg="3">
            <Asidebar>
              <ul>
                {pages.map(({ icon, label, path, visibility }) => (
                  <Li
                    key={label}
                    selected={path === pathRouter}
                    style={{ display: visibility ? 'flex' : 'none' }}
                  >
                    {path ? (
                      <Link href={path}>
                        {icon}
                        {label}
                      </Link>
                    ) : (
                      <button type="button" onClick={() => handleLogout()}>
                        {icon}
                        {label}
                      </button>
                    )}
                  </Li>
                ))}
              </ul>
            </Asidebar>
          </Col>
          <Col xs="12" sm="12" md="9" lg="9">
            <DashboardContent>{children}</DashboardContent>
          </Col>
        </Row>
      </DashboardContainer>
    </>
  )
}
