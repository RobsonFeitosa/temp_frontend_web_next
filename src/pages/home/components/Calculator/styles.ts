import { DialogTrigger, Heading, styled, Text } from '@alosix-hub-ui/react'
import lineCircleEnd from '@/assets/line-end-circle.svg'

export const Container = styled('div', {
  background: '$gray150',
  marginTop: '$4',

  padding: '$10',
  position: 'relative',
  zIndex: 1,

  '&::before': {
    backgroundImage: `url(${lineCircleEnd.src})`,
    backgroundRepeat: 'no-repeat',
    content: '',
    display: 'block',
    width: 440,
    height: '$4',
    position: 'absolute',
    zIndex: 2,
    left: 0,
    top: '-$2',
  },

  [`> ${Heading}`]: {
    fontSize: '$2xl',
    fontWeight: '300',
    marginBottom: '$2',
  },

  [`> ${Text}`]: {
    fontSize: '$sm',
  },

  '@media (max-width: 700px)': {
    padding: '$6',

    [` ${Heading}`]: {
      fontSize: '$lg',
    },

    [`${Text}`]: {
      fontSize: '$xs',
    },

    '&::before': {
      left: '-110px',
    },
  },
})

export const BtnDialogTrigger = styled(DialogTrigger, {
  all: 'unset',
  margin: '0 auto',
  display: 'block',
  marginBottom: '$6',
})

export const Form = styled('div', {
  marginTop: '$6',
  display: 'flex',
  color: '$alosixY500',
  flexDirection: 'column',
  gap: '$4',

  '.groupLabel label': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  [`${Heading}`]: {
    fontSize: '$sm',
    marginTop: '$4',
    marginBottom: '$2',
  },

  '@media (max-width: 990px)': {
    label: {
      marginBottom: '10px',
    },
  },

  '@media (max-width: 488px)': {
    [`${Heading}`]: {
      fontSize: '$xs',
      marginTop: 0,
    },

    'span, p': {
      fontSize: '$xs',
    },
  },
})

export const ConfirmTruly = styled('div', {
  padding: '0 20px',
  marginBottom: '25px',
  color: '#5c9d3d',
  fontWeight: 900,
  fontSize: '16px',

  svg: {
    marginRight: '10px',
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
})

export const SwitcherInputForm = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '$8',
  marginBottom: '$8',
  gap: '$16',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '$4',
    marginTop: '$4',
    gap: '$2',
  },
})

export const SwitcherInputBtn = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '$2',

  [`> ${Text}`]: {
    marginTop: '1px',
  },

  svg: {
    fontSize: '$lg',
    color: '$alosixG200',
  },

  variants: {
    isCheck: {
      true: {
        '&::after': {
          display: 'none',
        },
      },
    },
  },
})

export const SampleOrderContainer = styled('div', {
  position: 'relative',
  zIndex: 1,

  padding: '$6',
  background: '$white',

  [`> ${Text}`]: {
    display: 'block',
    marginBottom: '$6',
  },

  border: '4px solid transparent',

  variants: {
    warning: {
      true: {
        borderColor: 'red',
      },
    },
    success: {
      true: {
        borderColor: '$alosixG200',
      },
      false: {
        borderColor: '$alosixR500',
      },
    },
  },
})

export const ActionsContainer = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 2,

  padding: '$4 $6',
  display: 'flex',
  gap: '$4',
})

export const BtnActRemove = styled('button', {
  all: 'unset',
  fontSize: '$xl',
  borderRadius: '$full',
  background: '$gray200',
  color: '$white',
  width: '40px',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'ease-in-out 0.2s',

  '&:hover': {
    background: '$alosixR500',
    color: '$white',
  },
})

export const BtnActConfirmation = styled('button', {
  all: 'unset',
  fontSize: '$xl',
  borderRadius: '$full',
  padding: '$2 $4',
  cursor: 'pointer',
  color: '$alosixG200',
  border: '1px solid $alosixG200',
  transition: 'ease-in-out 0.2s',

  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  [`> ${Text}`]: {
    transition: 'ease-in-out 0.1s',
    fontSize: '$sm',
    color: '$alosixG200',
  },

  '&:hover': {
    background: '$alosixG200',
    color: '$white',

    [`> ${Text}`]: {
      color: '$white',
    },
  },

  variants: {
    isConfirmed: {
      true: {
        padding: '$2',
        background: '$alosixG200',
        color: '$white',

        [`> ${Text}`]: {
          display: 'none',
        },
      },
    },
  },
})
