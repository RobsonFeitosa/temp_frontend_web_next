import { styled, Text } from '@alosix-hub-ui/react'
import Link from 'next/link'

export const Container = styled('div', {
  width: '100%',
  display: 'none',
  background: '$alosixG300',

  '@media (max-width: 700px)': {
    display: 'none',
  },

  variants: {
    float: {
      true: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 123,
        display: 'block',
      },
    },
  },
})

export const AuthWrapper = styled('div', {
  paddingRight: '$4',
  '> a': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$6',

    background: 'rgba(238, 249, 233, 0.91)',
    borderRadius: '$full',
    textDecoration: 'none',

    [`> ${Text}`]: {
      color: '$white',
    },

    '&:hover': {
      background: 'rgba(238, 249, 233, 0.91)',
    },
  },

  [`> ${Text}`]: {
    color: '$white',
  },

  '@media (max-width: 768px)': {
    gap: '$2',
  },
})
export const IconEmpty = styled('div', {
  background: 'rgba(92, 157, 61, 0.22)',
  borderRadius: '100%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: '3px',
  border: '2px solid #fff',

  svg: {
    color: '$alosixG300',
    width: '$4',
  },
})

export const HeadContent = styled('div', {
  width: '100%',
  display: 'flex',
  borderTop: '1px solid rgba(169, 179, 194, 0.5)',

  'a.logo img': {
    width: '90px',
    height: 'auto',

    ' @media (max-width: 1270px)': {
      width: '150px',
    },

    '@media (max-width: 1380px)': {
      width: '210px',
    },
  },
})

export const HeadNav = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',

  '.logged-account': {
    background: '#eef9e9',
  },
})

export const AdminToGO = styled(Link, {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$white',
  opacity: 0.8,
  background: 'transparent',
  border: 0,
  outline: 'none',
  cursor: 'pointer',
  transition: 'all ease-in-out 0.2s',

  '@media (max-width: 480px)': {
    width: '60%',
  },

  '&:hover': {
    opacity: 1,
    transform: 'rotate(60deg)',
  },
})
