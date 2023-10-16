import { Text, styled } from '@alosix-hub-ui/react'

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: 50,
  padding: '0 $4',

  background: '$alosixG300',

  [`${Text}`]: {
    color: '$white',
    opacity: 0.8,
  },

  '@media (max-width: 700px)': {
    display: 'none',
  },

  color: '#ffffffd1',

  // '> div': {
  //   height: '100%',
  //   display: 'flex',
  //   alignItems: 'center',
  //   position: 'relative',
  // },

  '@media (max-width: 768px)': {
    'span, p': {
      fontSize: '$xs',
    },
  },
})

export const Descount = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '#e2e39e',

  [`> ${Text}`]: {
    marginTop: '0.125rem',
    marginLeft: '0.5rem',
  },
})

export const Primary = styled('div', {
  '> span': {
    marginRight: '20px',
  },
})

export const Second = styled('div', {
  marginRight: '20px',
  display: 'flex',
  position: 'relative',

  alignItems: 'center',
})

export const BtnMoreBill = styled('button', {
  background: 'transparent',
  outline: 'none',
  border: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#e2e39e',
})
