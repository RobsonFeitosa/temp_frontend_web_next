import { Text, styled } from '@alosix-hub-ui/react'

export const FooterContainer = styled('div', {
  marginTop: '$10',
  padding: '$6 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  background: '$alosixG300',

  [`> ${Text}`]: {
    color: '$white',

    a: {
      marginLeft: '$2',
      color: '$white',
    },
  },

  a: {
    color: '$white',
    textDecoration: 'none',

    [`> ${Text}`]: {
      opacity: '0.8',
      color: '$white',
      fontSize: '$xs',

      svg: {
        marginLeft: '$2',
        fontSize: '$lg',
      },
    },
  },

  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },

  '@media (max-width: 488px)': {
    'span, p, a': {
      fontSize: '$xs',
    },
  },
})
