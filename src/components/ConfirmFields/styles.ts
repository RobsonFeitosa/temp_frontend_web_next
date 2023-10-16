import { Text, styled } from '@alosix-hub-ui/react'

export const Container = styled('div', {
  fontSize: '13px',

  p: {
    marginBottom: '8px',
  },
})

export const Content = styled('div', {
  display: 'block',
})

export const BtnHiddenConfirmAll = styled('button', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '40px',
  height: '40px',
  opacity: 0,
  cursor: 'default',
})

export const BtnConfirmField = styled('div', {
  marginBottom: '8px',
  cursor: 'pointer',
  marginRight: '20px',
  display: 'inline-block',
  borderRadius: '20px',
  padding: '4px 20px',
  paddingTop: '5px',
  background: '#5c9d3d',
  color: '$white',
  textAlign: 'center',
  border: 0,

  [`${Text}`]: {
    color: '$white',
  },

  variants: {
    confirmed: {
      true: {
        background: '#e2e39e',
        color: '#5c9d3d',
        position: 'relative',

        svg: {
          position: 'absolute',
          right: '-0.1875rem',
          top: '-0.175rem',
        },
      },
    },
  },
})

export const BoxConfirm = styled('div', {
  marginBottom: '$2',

  '&:last-child': {
    marginBottom: '10px',
  },

  [`> ${Text}`]: {
    display: 'block',
    marginBottom: '$2',
  },

  ' > div': {
    '> span': {
      marginBottom: '8px',
      marginRight: '20px',
      display: 'inline-block',
      borderRadius: '20px',
      padding: '4px 20px',
      paddingTop: '5px',
      background: '#5c9d3d',
      textAlign: 'center',
    },
  },
})

export const BtnConfirm = styled('div', {
  background: 'transparent',
  outline: 'none',
  border: 0,

  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',

  button: {
    background: '#bfa526',
    width: '48%',
  },

  '@media (max-width: 480px)': {
    display: 'block',
    button: {
      width: '100%',
    },
  },
})
