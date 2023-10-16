import {
  ShareBox,
  ShareContainer,
  ShareItem,
} from '@/pages/home/components/Calculator/Report/Share/styles'
import { Heading, Text, styled } from '@alosix-hub-ui/react'

export const SamplesContainer = styled('div', {})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$2',

  [`> ${Heading}`]: {
    fontSize: '$md',
  },
})

export const SamplesContent = styled('div', {})

export const SamplesItem = styled('div', {
  width: '100%',
  background: '#e2e39e',
  color: '#5e6028',

  marginBottom: '20px',

  h3: {
    fontSize: '14px',
    margin: '20px 0',
    lineHeight: '22px',

    strong: {
      display: 'block',
      fontSize: '18px',
      textTransform: 'uppercase',
    },
  },

  span: {
    display: 'block',

    '&:last-child': {
      marginBottom: 0,
    },

    '&.code': {
      fontSize: '12px',
      textAlign: 'right',

      strong: {
        textTransform: 'uppercase',
      },
    },
  },
})

export const SampleWrapper = styled('div', {
  padding: '14px 16px',
})

export const HeadTop = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  button: {
    marginTop: '$2',
  },

  [`> ${Text}`]: {
    textTransform: 'uppercase',
  },
})

export const SampleShared = styled('div', {})

export const SampleAction = styled('div', {
  background: '#f7f7e4',
  padding: '15px 16px',
  display: 'flex',

  [`${ShareContainer}`]: {
    marginTop: 0,

    [`${ShareBox}`]: {
      gap: '$4',
    },

    [`> ${Text}`]: {
      display: 'none',
    },

    [`${ShareItem}`]: {
      marginRight: 0,

      button: {
        svg: {
          margin: 0,
        },
      },
    },
  },

  a: {
    width: '100%',
    textDecoration: 'none',
    background: 'transparent',
    border: 0,
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5e6028',
    transition: 'all ease-in-out 0.2s',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: '13px',

    '&:hover:': {
      color: '#5c9d3d',
    },

    svg: {
      marginRight: '10px',
    },
  },
})

export const ReportEmpty = styled('div', {
  textAlign: 'center',
  marginTop: '10px',
  border: '1px solid $alosixG200',
  padding: '$4',

  [`> ${Text}`]: {
    color: '$gray600',
    fontSize: 'xs',
  },

  a: {
    marginTop: '$2',
    display: 'block',
    color: '$alosixG200',
  },
})

export const BtnAddingNewCalculation = styled('button', {
  // TODO: concluir implementacao
  display: 'none',
})
