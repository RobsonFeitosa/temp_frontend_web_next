import { StateIbge } from '@/hooks/useGetAllStates'

export function getStateName(uf: string | undefined, stateFound: StateIbge[]) {
  const name = stateFound.find((state) => state.sigla === uf)?.nome
  return (uf && name) ?? ''
}
