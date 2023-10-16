import { styled, Text } from '@alosix-hub-ui/react'

export const Container = styled('div', {
  color: '$alosixG300',

  height: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  gap: '$2',

  [`> ${Text}`]: {
    fontSize: '0.8125rem',
  },

  '@media (max-width: 998px)': {
    display: 'none',
  },

  svg: {
    color: '#e2e39e',
  },
})
