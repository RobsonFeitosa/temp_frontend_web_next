import { styled } from '@alosix-hub-ui/react'

export const AdminContainer = styled('div', {})

export const AdminHeader = styled('div', {
  background: '$gray100',
  padding: '$2',
})

export const AdminWrapper = styled('div', {
  height: '100vh',

  display: 'flex',
  alignItems: 'stretch',
})

export const AdminAside = styled('div', {
  width: '235px',
  background: '$alosixG200',
  paddingTop: '$2',

  'ul, li': {
    padding: 0,
    margin: 0,
  },

  li: {
    padding: '$4',
    borderBottom: '1px solid $gray200',

    '&:last-child': {
      border: 0,
    },

    a: {
      textDecoration: 'none',
      color: '$white',
    },
  },
})

export const AdminContent = styled('div', {
  background: '$white',
  width: '100%',

  padding: '$4 $8',
})
