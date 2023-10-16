export function buildNamedInput(index: number | undefined, name: string) {
  const named = `data.${name}`

  if (index === undefined) return named
  return index >= 0 ? `data.${index}.${name}` : named
}
