import { Text, styled } from '@alosix-hub-ui/react'

export const ReportContainer = styled('div', {
  background: '$alosixY300',
  margin: '$4 0',

  ul: {
    padding: 0,
    margin: 0,

    li: {
      listStyle: 'none',
      marginTop: '$1',
      color: '$alosixG300',
    },
  },
  variants: {
    name: {
      reportWp: {
        outline: 'none',
      },
    },
  },
})

export const Header = styled('header', {
  background: '$alosixY300',
  padding: '$6 $8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [`> ${Text}`]: {
    color: '#5e6028',
    fontSize: '29px',
    fontWeight: 300,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },

  a: {
    color: '$alosixG300',
    textDecoration: 'none',
    fontWeight: '$medium',
    textTransform: 'uppercase',
  },
})

export const ReportMiddle = styled('div', {
  background: '#F1F2D2',
  padding: '$8',
})

export const BibliografyContainer = styled('div', {})
