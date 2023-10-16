import { ReactElement } from 'react'
import { GridRowContainer } from './styles'

interface RowProps {
  children: ReactElement
  rows: number
  alignItems?: 'flex-start' | 'flex-end' | 'center'
}

export function GridRow({ children, rows, alignItems = 'center' }: RowProps) {
  return (
    <GridRowContainer css={{ '--row-size': rows, alignItems }}>
      {children}
    </GridRowContainer>
  )
}
