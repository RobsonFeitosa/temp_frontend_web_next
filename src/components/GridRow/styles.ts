import { styled } from '@alosix-hub-ui/react'

export const GridRowContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--row-size), 1fr)',
  gap: '$4',

  '@media (max-width: 1360px)': {
    gap: '$2',
  },

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
})

export const GridItemContainer = styled('div', {
  padding: '$8',
  border: '1px solid #ccc',
  textAlign: 'center',
})
