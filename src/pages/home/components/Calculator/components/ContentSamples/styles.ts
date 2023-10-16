import { Heading, Text, styled } from '@alosix-hub-ui/react'

export const SamplesContainer = styled('div', {})

export const Form = styled('div', {
  marginTop: '$6',
  display: 'flex',
  color: '$alosixY500',
  flexDirection: 'column',
  gap: '$4',

  '.groupLabel label': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  [`${Heading}`]: {
    fontSize: '$sm',
    marginTop: '$4',
    marginBottom: '$2',
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
})

export const SwitcherInputForm = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '$8',
  marginBottom: '$8',
  gap: '$16',
})

export const SwitcherInputBtn = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  left: 0,
  top: 0,
  zIndex: 1,

  '&::before': {
    content: '',

    width: 16,
    height: 16,
    display: 'block',

    borderRadius: '$lg',
    border: '2px solid $alosixG200',
    overflow: 'hidden',
    background: '$white',
    marginRight: '$2',
    opacity: 0.7,
  },

  '&::after': {
    content: '',

    position: 'absolute',
    left: '6px',
    top: '6px',
    zIndex: 2,

    width: '$2',
    height: '$2',

    overflow: 'hidden',
    borderRadius: '$lg',
    background: '$alosixG200',
    marginRight: '$2',
    opacity: 0.7,
  },

  variants: {
    isCheck: {
      true: {
        '&::after': {
          display: 'none',
        },
      },
    },
  },
})
