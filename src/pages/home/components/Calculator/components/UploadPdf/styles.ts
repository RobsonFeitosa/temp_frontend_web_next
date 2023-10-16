import { Text, styled } from '@alosix-hub-ui/react'

export const RejectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FilesContainer = styled('div', {
  display: 'flex',
  width: '100%',
  padding: '$6',
  justifyContent: 'space-between',

  [`> div > ${Text}:first-child`]: {
    marginBottom: '$2',
  },

  '@media (max-width: 768px)': {
    padding: '$2',
  },
})

export const FileItem = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '$1',

  '> svg': {
    marginRight: '$2',
  },

  [` > ${Text}`]: {
    marginRight: '$6',
  },
  variants: {
    success: {
      true: {
        fontSize: '$sm',
        justifyContent: 'flex-start',
      },
    },
  },
})

export const UploadContainer = styled('div', {
  width: '100%',
  height: '$40',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px dashed $alosixG200',
  boxSizing: 'border-box',
  cursor: 'pointer',

  '&::focus': {
    border: 0,
  },

  [`> ${Text}`]: {
    color: '$alosixG200',
  },

  '@media (max-width: 768px)': {
    padding: '$2',
    textAlign: 'center',
  },

  variants: {
    reject: {
      true: {
        background: 'red',
        border: 0,

        [`> ${RejectContainer}`]: {
          svg: {
            color: '$alosixY300',
          },

          [`> ${Text}`]: {
            color: '$white',
          },
        },
      },
    },
    success: {
      true: {
        height: 'auto',
        borderWidth: '2px',

        [`> ${FilesContainer} `]: {
          ' > div > p': {
            textAlign: 'left',
            textTransform: 'uppercase',
            fontWeight: '$medium',
          },

          ' > div >  span': {
            borderTop: '1px solid $gray300',
            marginTop: '$4',
            display: 'block',
            maxWidth: '160px',
            paddingTop: '$2',
            textAlign: 'left',
          },
        },
      },
    },
  },
})

export const FormContainer = styled('form', {})

export const Input = styled('input', {})

export const FileWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$6',

  '@media (max-width: 768px)': {
    gap: '$2',
  },
})

export const Collaborator = styled('div', {
  '@media (max-width: 768px)': {
    img: {
      width: '100px',
      height: 'auto',
    },
  },
})
