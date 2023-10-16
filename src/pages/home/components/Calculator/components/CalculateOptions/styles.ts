import { Heading, styled } from '@alosix-hub-ui/react'

export const OptionsContainer = styled('div', {
  backgroundColor: '$white',
  boxShadow: '0px 0px 3px 3px $gray800',
  display: 'block',
  padding: '$2 $6',

  [`> ${Heading}`]: {
    marginBottom: '$4',
  },
})

export const OptionContainer = styled('div', {
  display: 'block',
  borderTop: '1px solid $gray100',
})

export const OptionContent = styled('label', {
  display: 'flex',
  gap: '$2',
  padding: '$4 0',
  alignItems: 'center',
  width: 'max-content',

  cursor: 'pointer',

  '@media (max-width: 488px)': {
    'span, p': {
      fontSize: '$xs',
    },
  },
})
