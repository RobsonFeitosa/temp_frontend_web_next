import React, { useEffect, useState } from 'react'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { FaCog, FaUserAlt } from 'react-icons/fa'
import { Container as Grid } from 'react-bootstrap'
import { useAuth } from '@/hooks/providers/auth'
import crop from '@/utils/cropImages'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../Nav'
import {
  AdminToGO,
  AuthWrapper,
  IconEmpty,
  Container,
  HeadContent,
  HeadNav,
} from './styles'

export default function Float() {
  const [isFloat, setIsFloat] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', () => {
        const x = window.scrollY

        if (x && x > 180) {
          setIsFloat(true)
        } else {
          setIsFloat(false)
        }

        return false
      })
    }
  }, [])

  useEffect(() => {
    user &&
      crop(user.avatar_url, 1 / 1).then((canvas: any) => {
        const imgCrop = document.querySelector('.imgCropFloat')
        imgCrop?.querySelector('canvas')?.remove()
        imgCrop?.appendChild(canvas)
      })
  }, [user])

  return (
    <Container float={isFloat}>
      <Grid>
        <HeadContent>
          <Nav />

          <HeadNav>
            {user && user.level === 1 && (
              <AdminToGO href="/admin/dashboard">
                <FaCog size={22} />
              </AdminToGO>
            )}

            <AuthWrapper>
              {user ? (
                <Link href="/dashboard">
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
                <Link href="/signin">
                  <IconEmpty>
                    <FaUserAlt size={22} />
                  </IconEmpty>
                </Link>
              )}
            </AuthWrapper>
          </HeadNav>
        </HeadContent>
      </Grid>
    </Container>
  )
}
