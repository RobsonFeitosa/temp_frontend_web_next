import { styled, Text } from '@alosix-hub-ui/react'

export const ActionsContainer = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 2,

  padding: '$4 $6',
  display: 'flex',
  gap: '$4',
})

export const BtnActConfirmation = styled('button', {
  all: 'unset',
  fontSize: '$xl',
  borderRadius: '$full',
  cursor: 'pointer',
  width: '130px',
  height: '37px',
  color: '$alosixG200',
  border: '1px solid $alosixG200',
  transition: 'ease-in-out 0.2s',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $3',
  textWrap: 'nowrap',
  position: 'relative',

  [`> ${Text}`]: {
    transition: 'ease-in-out 0.1s',
    fontSize: '$sm',
    color: '$alosixG200',
    width: '100px',
    flex: '1',
  },

  '&:disabled': {
    background: 'transparent',
    borderColor: '$gray300',
    color: '$gray300',
    cursor: 'not-allowed',

    [`> ${Text}`]: {
      color: '$gray300',
    },
  },

  '&:not(:disabled):hover': {
    background: '$alosixG200',
    color: '$white',

    [`> ${Text}`]: {
      color: '$white',
    },
  },

  variants: {
    isConfirmed: {
      true: {
        display: 'flex',
        background: '$alosixG200',
        color: '$white',
        gap: 0,
        padding: 0,
        // transition: 'ease-in-out 0.3s',
        width: '37px',
        transition: 'ease-in-out 0.2s',

        [`> ${Text}`]: {
          display: 'none',
        },
      },
    },
  },
})
