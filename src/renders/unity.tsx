import { unitys } from '@/pages/home/components/Calculator/config'
import { Text, styled } from '@alosix-hub-ui/react'
import React from 'react'

const TextUnity = styled(Text, {
  marginLeft: '0',

  variants: {
    position: {
      bottom: {
        position: 'relative',
        bottom: '-5px',
      },
      top: {
        position: 'relative',
        top: '-4px',
      },
    },
    outMargin: {
      true: {
        marginLeft: 0,
      },
    },
  },
})

export const renderUnity = (unity: string, isPrint = false) => {
  const sizeMain = isPrint ? 'xxs' : 'sm'
  const sizeInner = isPrint ? ('0.325rem' as 'xs') : 'xs'

  switch (unity) {
    case unitys.cacl:
      return (
        <Text as="span" size={sizeMain}>
          CaCI
          <TextUnity as="small" size={sizeInner} position="bottom">
            2
          </TextUnity>
        </Text>
      )
    case unitys.mgdm:
      return (
        <Text as="span" size={sizeMain}>
          mg dm
          <TextUnity as="small" size={sizeInner} position="top">
            -3
          </TextUnity>
        </Text>
      )
    case unitys.gdm:
      return (
        <Text as="span" size={sizeMain}>
          g dm
          <TextUnity as="small" size={sizeInner} position="top">
            -3
          </TextUnity>
        </Text>
      )
    case unitys.gkg:
      return (
        <Text as="span" size={sizeMain}>
          g kg
          <TextUnity as="small" size={sizeInner} position="top">
            -1
          </TextUnity>
        </Text>
      )
    case unitys.porc:
      return (
        <Text as="span" size={sizeMain}>
          %
        </Text>
      )

    case unitys.k2o:
      return (
        <Text as="span" size={sizeMain}>
          K
          <TextUnity as="small" size={sizeInner} position="bottom">
            2
          </TextUnity>
          O
        </Text>
      )
    case unitys.h2o:
      return (
        <Text as="span" size={sizeMain}>
          H
          <TextUnity as="small" size={sizeInner} position="bottom">
            2
          </TextUnity>
          O
        </Text>
      )
    case unitys.mmol:
      return (
        <Text as="span" size={sizeMain}>
          mmol
          <TextUnity as="small" size={sizeInner} position="bottom">
            c
          </TextUnity>{' '}
          dm
          <TextUnity as="small" size={sizeInner} position="top">
            -3
          </TextUnity>
        </Text>
      )
    case unitys.cmol:
      return (
        <Text as="span" size={sizeMain}>
          cmol
          <TextUnity as="small" size={sizeInner} position="bottom">
            c
          </TextUnity>{' '}
          dm
          <TextUnity as="small" size={sizeInner} position="top">
            -3
          </TextUnity>
        </Text>
      )
    case unitys.tha:
      return (
        <Text as="span" size={sizeMain}>
          t ha
          <TextUnity as="small" size={sizeInner} position="top">
            -1
          </TextUnity>
        </Text>
      )
    case unitys.nha:
      return (
        <Text as="span" size={sizeMain}>
          N ha
          <TextUnity as="small" size={sizeInner} position="top">
            -1
          </TextUnity>
        </Text>
      )
    case unitys.p2o5:
      return (
        <Text as="span" size={sizeMain}>
          P
          <TextUnity as="small" size={sizeInner} position="bottom">
            2
          </TextUnity>
          O
          <TextUnity as="small" size={sizeInner} position="bottom">
            5
          </TextUnity>
        </Text>
      )
    case unitys.ha:
      return (
        <Text as="span" size={sizeMain}>
          ha
          <TextUnity as="small" size={sizeInner} position="top">
            -1
          </TextUnity>
        </Text>
      )
    case unitys.ds:
      return (
        <Text as="span" size={sizeMain}>
          Ds, g cm
          <TextUnity as="small" size={sizeInner} position="top">
            -3
          </TextUnity>
        </Text>
      )
    case unitys.kgkg:
      return (
        <Text as="span" size={sizeMain}>
          kg kg
          <TextUnity as="small" size={sizeInner} position="top">
            -1
          </TextUnity>
        </Text>
      )
    default:
  }
}
