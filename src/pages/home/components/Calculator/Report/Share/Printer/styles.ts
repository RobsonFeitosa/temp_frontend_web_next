import { styled } from '@alosix-hub-ui/react'

export const Container = styled('div', {})

export const styling = {
  title: {
    fontSize: 22,
    display: 'block',
    marginBottom: 12,
    fontWeight: 900,
  },

  subtitle: {
    fontSize: 16,
    display: 'block',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 900,
  },

  groupsServices: {
    marginTop: 0,
    marginBottom: 0,
  },

  groupReponse: {
    marginBottom: 20,
  },

  fertilizingWrapper: {
    marginBottom: 20,
  },

  groupFertilizing: {
    marginBottom: 8,
  },

  groupFertilizingP: {
    marginBottom: 8,
  },

  groupFertilizingStrong: {
    color: '#5c9d3d',
    fontWeight: 600,
  },

  tbTitle: {
    fontSize: 14,
    display: 'block',
    marginTop: 5,
    marginBottom: 2,
    fontWeight: 900,
  },

  headerSample: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 0,
  },

  tbWrapper: {
    display: 'block',
    marginBottom: 15,
  },

  body: {
    display: 'block',
    margin: 0,
  },

  bodyItem: {
    marginRight: 20,
    display: 'block',
    marginTop: 0,
    marginBottom: 0,
  },

  gGroup: {
    display: 'flex',
    margin: 0,
    flexWrap: 'wrap' as const,
  },

  gGroupBlock: {
    display: 'block',
    margin: 0,
  },

  itemResponseUl: {
    paddingLeft: 25,
    margin: 0,
  },

  itemResponse: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 4,
    marginBottom: 0,
  },

  itemResponseForce: {
    fontWeight: 900,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: 0,
    display: 'flex',
  },

  itemResponseRow: {
    display: 'flex',
    marginTop: 0,
    marginBottom: 0,
  },

  itemResponseP: {
    display: 'block',
    marginTop: 0,
    marginBottom: 0,
  },

  itemResponseCol: {
    display: 'block',
    marginTop: 0,
    marginBottom: 0,
  },

  hr: {
    marginTop: 12,
    marginBottom: 12,
  },

  smallType: {
    position: 'relative' as const,

    bottonIten: {
      fontSize: 12,
      position: 'relative' as const,
      left: 2,
      fontWeight: 500,
      marginRight: 2,
      bottom: -4,
    },

    topIten: {
      fontSize: 12,
      position: 'relative' as const,
      left: 2,
      fontWeight: 500,
      marginRight: 2,
      top: -4,
    },
  },

  bibliography: {
    display: 'block',
    marginTop: 40,
    borderTop: '1px solid #d8d8d8',
    paddingTop: 30,
  },
}

export const Description = styled('div', {
  fontSize: '10pt',
  p: {
    marginBottom: '5px',
  },
  h3: {
    fontSize: '10pt',
  },
})
