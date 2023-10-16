export const renderSymbolsTextComparation = (
  simb: string,
): string | undefined => {
  switch (simb) {
    case '>20':
      return 'É maior igual a 20'
    case '<=20':
      return 'É menor ou igual a 20'
    case '<80':
      return 'É menor que 80'
    case '>100':
      return 'É maior que 100'
    case '80a100':
      return 'Entre 80 a 100'
    default:
  }
}
