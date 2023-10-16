import { styled } from '@alosix-hub-ui/react'

export const ShareContainer = styled('div', {
  marginTop: '$4',
  display: 'flex',
  alignItems: 'center',
  padding: '13px 20px',
  backgroundColor: '$alosixY300',
  border: '1px solid $alosixY500',
  gap: '$4',
})

export const ShareBox = styled('div', {
  display: 'flex',
})

export const ShareItem = styled('div', {
  marginRight: '20px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-start',
})

export const Whatsapp = styled('div', {
  position: 'absolute',
  top: '-5px',
  left: '100%',
  marginLeft: '15px',
  display: 'flex',
  alignItems: 'center',

  input: {
    padding: '6px 10px',
    border: 0,
    borderRadius: 0,
    fontSize: '12px',
    outline: 'none',
  },

  '> button': {
    all: 'unset',
    padding: '4px 12px',
    background: '$alosixY500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      color: '$white',
      width: '15px',
    },
  },
})

export const BtnShare = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',

  svg: {
    marginRight: 0,
    fontSize: '20px',
    color: '$alosixY500',
  },
})
