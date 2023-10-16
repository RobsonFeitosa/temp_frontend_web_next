import { styled, Text } from '@alosix-hub-ui/react'
import Link from 'next/link'

export const Container = styled('div', {
  padding: '$4 0',
})

export const AuthWrapper = styled('div', {
  '> a': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$6',

    borderRadius: '$full',
    textDecoration: 'none',

    [`> ${Text}`]: {
      color: '$alosixG300',
    },

    minWidth: '12rem',
    paddingLeft: '$4',

    '&:hover': {
      background: 'rgba(238, 249, 233, 0.91)',
    },
  },

  [`> ${Text}`]: {
    color: '$alosix700',
  },

  '@media (max-width: 768px)': {
    gap: '$2',

    [`${Text}`]: {
      fontSize: '$xs',
    },
  },
})

export const LinkBrand = styled(Link, {
  '@media (max-width: 560px)': {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '$4',
  },

  '@media (max-width: 768px)': {
    img: {
      width: '160px',
    },
  },
})

export const SideWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$20',

  '@media (max-width: 480px)': {
    justifyContent: 'center',
    gap: '$4',
  },

  '@media (max-width: 768px)': {
    gap: '$4',
  },
})

export const IconEmpty = styled('div', {
  background: 'rgba(92, 157, 61, 0.22)',
  borderRadius: '100%',
  width: '65px',
  height: '65px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: '3px',

  svg: {
    color: '$alosixG300',
  },

  '@media (max-width: 768px)': {
    width: '50px',
    height: '50px',

    svg: {
      width: '22px',
    },
  },

  '@media (max-width: 480px)': {
    width: '35px',
    height: '35px',

    svg: {
      width: '16px',
    },
  },
})

export const AdminToGO = styled(Link, {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#5c9d3d',
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
