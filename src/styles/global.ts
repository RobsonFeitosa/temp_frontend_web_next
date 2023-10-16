import { globalCss, darkTheme } from '@alosix-hub-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$white',
    color: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
    fontSize: '$sm',
  },

  '.container-box': {
    maxWidth: '84.5rem',
    padding: '0 $10',
    margin: '0 auto',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '$sm',
  },

  '@media (max-width: 768px)': {
    '.container': {
      maxWidth: '100%',
      width: '100%',
    },
  },

  '@media (max-width: 558px)': {
    '#dialog-custom ': {
      '> div:last-child': {
        minWidth: 'calc(100% - 40px)',
      },
    },
  },
})

export { darkTheme }
