import { styled } from '@alosix-hub-ui/react'

export const NavSettingsContainer = styled('div', {
  position: 'relative',

  ul: {
    margin: 0,
    padding: 0,
    position: 'absolute',
    right: 0,
    top: '30px',
    width: '120px',
    background: '#f7f7e4',

    li: {
      display: 'block',
      listStyle: 'none',
      borderBottom: '1px solid #e2e39e',

      '&:last-child': {
        border: 0,
      },

      button: {
        margin: 0,
        background: 'transparent',
        border: 0,
        padding: '6px 10px',
        width: '100%',
        color: '#5e6028',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        svg: {
          marginRight: '8px',
        },
      },
    },
  },
})

export const DotsBtn = styled('button', {
  position: 'absolute',
  right: '-7px',
  top: '-10px',
  background: 'transparent',
  outline: 'none',
  border: 0,
  display: 'block',

  svg: {
    color: '#96985e',
  },
})
