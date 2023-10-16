import Image from 'next/image'
import logoImg from '@/assets/logo-alosix-default.svg'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { FaUserAlt, FaCog } from 'react-icons/fa'

import { Text } from '@alosix-hub-ui/react'

import Nav from './Nav'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Container as Grid, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Float from './Float'

import {
  AdminToGO,
  AuthWrapper,
  Container,
  IconEmpty,
  LinkBrand,
  SideWrapper,
} from './styles'
import { parseCookies } from 'nookies'

export function Header() {
  const { '@Alosix:user': userOnCookies } = parseCookies()

  const user = userOnCookies ? JSON.parse(userOnCookies) : null

  return (
    <>
      <Grid>
        <Container>
          <Row style={{ justifyContent: 'space-between' }}>
            <Col xs lg="5" sm="4">
              <LinkBrand href="/">
                <Image
                  src={logoImg}
                  width={190}
                  height={98}
                  quality={100}
                  priority
                  alt=""
                />
              </LinkBrand>
            </Col>

            <Col lg="5" sm="7">
              <SideWrapper>
                <ThemeSwitcher />

                {!!user && user.level === 1 && (
                  <AdminToGO href="/admin/dashboard">
                    <FaCog size={22} />
                  </AdminToGO>
                )}

                <AuthWrapper>
                  {user ? (
                    <Link href="dashboard">
                      <Text as="span">{user.name}</Text>
                      <IconEmpty>
                        {user.avatar_url ? (
                          <Image
                            src={user.avatar_url}
                            alt=""
                            width={100}
                            height={100}
                          />
                        ) : (
                          <BsPersonBoundingBox size={22} />
                        )}
                      </IconEmpty>
                    </Link>
                  ) : (
                    <Link href="/signin" className="access-account">
                      <Text as="span">Acessar conta</Text>

                      <IconEmpty>
                        <FaUserAlt size={22} />
                      </IconEmpty>
                    </Link>
                  )}
                </AuthWrapper>
              </SideWrapper>
            </Col>
          </Row>
        </Container>

        <Nav />
      </Grid>

      <Float />
    </>
  )
}
