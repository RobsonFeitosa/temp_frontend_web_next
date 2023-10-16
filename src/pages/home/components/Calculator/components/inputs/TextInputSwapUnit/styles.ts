import { Box, Text, styled } from '@alosix-hub-ui/react'

export const TextInputSwapUnitContainer = styled('div', {
  [`> ${Text}`]: {
    display: 'block',
    marginBottom: '$1',
  },

  'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
})

export const ContainerSwap = styled('div', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  marginBottom: '$2',

  '> div:last-child': {
    width: '100%',
  },
})

export const ContentUnits = styled('div', {
  position: 'absolute',
  right: 0,
  paddingRight: '$4',

  display: 'flex',
  gap: '$4',

  '> div': {
    width: '100%',
    '> div': {
      width: '100%',
      button: {
        padding: '4px 0',

        width: '100%',
        justifyContent: 'center',
      },
    },
  },
})

export const SwitchUnitBtn = styled('button', {
  all: 'unset',
  cursor: 'pointer',
})

export const OptionsUnitsBox = styled(Box, {
  position: 'absolute',
  right: 'calc(100% + $4)',
  top: '50%',
  transform: 'translateY(-50%)',

  width: '90px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  backgroundColor: '$white',
  border: 0,
})

export const SelectUnitBtn = styled('button', {
  all: 'unset',
  cursor: 'pointer',
})
