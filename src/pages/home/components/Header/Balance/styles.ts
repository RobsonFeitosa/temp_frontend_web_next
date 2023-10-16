import { Heading, styled, Text } from '@alosix-hub-ui/react'

export const Container = styled('div', {
  position: 'absolute',
  right: 0,
  top: '100%',
  width: '380px',
  background: '#e2e39e',
  zIndex: 99,
  marginTop: '14px',

  '> div': {
    padding: '14px 20px',
  },

  [`${Text}`]: {
    color: 'rgb(94, 96, 40)',
  },

  hr: {
    border: 0,
    borderTop: '1px solid rgba(0,0,0,.4)',
  },
})

export const CardSelected = styled('div', {
  fontSize: '0.8125rem',
})

export const FooterTotal = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  fontWeight: 500,

  '> div': {
    display: 'flex',
    width: '100%',

    strong: {
      marginLeft: '0.7625rem',
    },
  },

  strong: {
    color: 'rgb(94, 96, 40)',
  },
})

export const FirstCalculation = styled('div', {
  marginLeft: '0.625rem',
  color: '#7f7f7f',
  display: 'flex',
  alignItems: 'center',

  '&::before': {
    content: '.',
    display: 'block',
    position: 'relative',
    top: '-0.1875rem',
    marginRight: '0.5625rem',
  },

  [`> ${Text}`]: {
    fontSize: '$xs',
  },

  '> strong': {
    marginLeft: '0.625rem',
  },
})

export const BtnToggleManual = styled('button', {
  background: 'transparent',
  color: '#5e6028',
  border: 0,
  outline: 'none',
  transition: 'all ease-in-out 0.2s',

  '&:hover': {
    color: '#5c9d3d',
  },
})

export const BtnToggleDescount = styled('button', {
  background: 'transparent',
  marginLeft: '0.8375rem',
  color: '#7f7f7f',
  border: 0,
  outline: 'none',
  transition: 'all ease-in-out 0.2s',

  '&:hover': {
    color: '#5c9d3d',
  },
})

export const HeaderBalance = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [`${Heading}`]: {
    color: '#5e6028',
    marginBottom: '2px',
    fontSize: '18px',

    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 480px)': {
      fontSize: '15px',
    },

    svg: {
      marginLeft: '10px',
    },
  },

  [`> ${Text}`]: {
    display: 'block',
    fontSize: '13px',
    textTransform: 'uppercase',
  },
})

export const FooterBalance = styled('div', {
  [`> ${Text}`]: {
    display: 'block',
    fontSize: '13px',
    textTransform: 'uppercase',
  },
})

export const FooterHead = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const ContentBalance = styled('div', {
  minHeight: '180px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingBottom: '0px',

  '@media (max-width: 480px) ': {
    minHeight: '90px',
  },

  span: {
    fontSize: '13px',
  },

  '> span': {
    display: 'block',
    marginTop: '6px',
    marginBottom: '6px',
  },

  ul: {
    margin: 0,
    padding: 0,

    li: {
      listStyle: 'none',
      '> div': {
        marginBottom: '12px',
        marginTop: '12px',
        fontSize: '13px',
        background: '#fcfcfcd1',
        padding: '5px 8px',
        marginRight: 0,
        display: 'flex',
        alignItems: 'center',

        svg: {
          marginRight: '10px',
        },
      },

      '&:first-child': {
        marginTop: 0,
      },

      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
})
