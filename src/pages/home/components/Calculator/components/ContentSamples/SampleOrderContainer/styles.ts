import { Heading, Text, styled } from '@alosix-hub-ui/react'

export const SampleContainer = styled('div', {
  position: 'relative',
  zIndex: 1,

  padding: '$6',
  background: '$white',

  [`> ${Text}`]: {
    display: 'block',
    marginBottom: '$6',
  },

  border: '4px solid transparent',

  variants: {
    isConfirmed: {
      true: {
        borderColor: '$alosixG300',
        borderWidth: '2px',
        [`${Text}, ${Heading}`]: {
          opacity: 0.6,
        },

        [`> ${Text}`]: {
          opacity: 1,
          color: '$alosixG300',
        },
      },
    },
    warning: {
      true: {
        borderColor: 'red',
      },
    },
    success: {
      true: {
        borderColor: '$alosixY300',
      },
      false: {
        borderColor: '$alosixR500',
      },
    },
  },
})
