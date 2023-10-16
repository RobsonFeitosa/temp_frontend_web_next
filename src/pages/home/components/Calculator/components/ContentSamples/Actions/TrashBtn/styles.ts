import { styled } from '@alosix-hub-ui/react'

export const TrashBtnContainer = styled('button', {
  all: 'unset',
  fontSize: '$xl',
  borderRadius: '$full',
  background: '$gray200',
  color: '$white',
  height: '37px',
  width: '37px',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'ease-in-out 0.2s',

  variants: {
    warning: {
      true: {
        background: '$alosixR500',
      },
    },
  },
})
