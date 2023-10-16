import { Text, Heading, styled } from '@alosix-hub-ui/react'

export const ReportSingleContainer = styled('div', {
  Hr: {
    marginTop: '$10',
    marginBottom: '$10',
  },

  '&:last-child hr': {
    display: 'none',
  },
})

export const Title = styled('div', {
  display: 'flex',
  gap: '$4',

  '> div': {
    display: 'flex',
    gap: '$4',

    span: {
      fontSize: '$sm',
    },
  },

  '@media (max-width: 768px)': {
    '> div': {
      display: 'inline-block',

      span: {
        marginRight: '20px',
      },
    },
  },
})

export const Indent = styled('div', {
  paddingLeft: '$8',

  '@media (max-width: 768px)': {
    paddingLeft: '$4',
  },
})

export const Wrapper = styled('div', {
  display: 'block',
  marginTop: '$4',

  [`> ${Heading}`]: {
    marginBottom: '$2',
    fontSize: '$md',
    display: 'flex',
    textTransform: 'uppercase',
    fontWeight: '$bold',
    color: '#5e6028',
  },
})

export const Hr = styled('hr', {
  border: 0,
  borderBottom: '2px solid $alosixG200',
})

export const ReportItem = styled('div', {
  [`> ${Heading}`]: {
    fontSize: '$sm',
    borderBottom: '1px solid #85856330',
    paddingBottom: '$2',
    marginTop: '$4',
    marginBottom: '$2',
  },
})

export const ReportItemBody = styled('div', {
  [`> ${Text}`]: {
    display: 'inline-block',
    marginRight: '$6',
  },
})

export const ReportItemResponse = styled('div', {
  marginTop: '$1',

  [`${Text}`]: {
    color: '$alosixG300',
  },

  '> span': {
    display: 'inline-block',
    marginRight: '$6',
  },
})

export const GroupResponse = styled('div', {
  marginTop: '$3',

  [`> span`]: {
    color: '$gray800',
  },
})

export const Infor = styled('div', {})

export const Table = styled('table', {
  marginTop: '$1',
  color: '$alosixG300',
  border: '1px solid $alosixG200',
  borderSpacing: '30px',
  width: '100%',
  textAlign: 'center',

  'th, td': {
    padding: '4px',
  },
})

export const HeaderSingle = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$4',

  [`> ${Text}`]: {
    fontSize: '$lg',
    fontWeight: 500,
    color: '$alosixG300',
    textTransform: 'uppercase',
  },

  a: {
    textTransform: 'uppercase',
    color: '$alosixG300',
    fontWeight: 500,
    textDecoration: 'none',
    fontSize: '$xs',
  },
})
