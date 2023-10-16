import { styled } from '@alosix-hub-ui/react'

export const Container = styled('div', {
  '@media (max-width: 768px)': {
    '.css-54b1xn-placeholder': {
      fontSize: '$xs',
    },

    'input, select': {
      fontSize: '$sx',
    },
  },
})
