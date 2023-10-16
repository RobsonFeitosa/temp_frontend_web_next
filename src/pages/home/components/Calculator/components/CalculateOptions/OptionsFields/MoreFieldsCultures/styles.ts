import { Text, styled } from '@alosix-hub-ui/react'

export const MoreFieldsContainer = styled('div', {
  display: 'block',
  width: '80%',
  margin: '$4 0',
  background: 'rgba(245, 245, 245, 0.4)',
  padding: '$8',
  border: '1px solid rgb(234, 234, 234)',
})

export const FieldSetContainer = styled('fieldset', {
  border: 0,
  background: 'transparent',
  marginRight: '$4',

  [`> ${Text}`]: {
    fontWeight: '$medium',
  },

  '&:nth-child(even)': {
    marginRight: 0,
  },
})
