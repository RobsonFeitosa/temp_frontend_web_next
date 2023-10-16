import { Text, styled } from '@alosix-hub-ui/react'

export const UnitContainer = styled('div', {
  [`${Text}`]: {
    color: '$alosixG200',
  },

  [`> ${Text}`]: {
    display: 'flex',
    position: 'relative',
    fontSize: '$xs',
    textWrap: 'nowrap',
    justifyContent: 'center',

    [`> ${Text}`]: {
      position: 'relative',

      top: 'var(--position)',
      fontSize: '$xxs',
      marginLeft: '0.10rem',
      marginRight: '$1',

      '&.omit': {
        marginRight: 0,
      },
    },
  },
})
