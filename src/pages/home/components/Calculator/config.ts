import { UnitsEnum } from '@/enum'

export type unitType = typeof UnitsEnum

interface CalculatorConfigDTO {
  allUnits: UnitsEnum[]
  fieldsOptUnits: {
    sand: UnitsEnum[]
    silt: UnitsEnum[]
    clay: UnitsEnum[]
    organicMatter: UnitsEnum[]
    ph: UnitsEnum[]
    pPhosphor: UnitsEnum[]
    kPotassium: UnitsEnum[]
    naSodium: UnitsEnum[]
    sSulfur: UnitsEnum[]
    bBoron: UnitsEnum[]
    cuCopper: UnitsEnum[]
    feIron: UnitsEnum[]
    mnManganese: UnitsEnum[]
    znZinc: UnitsEnum[]
    caCalcium: UnitsEnum[]
    mgMagnesium: UnitsEnum[]
    alAluminum: UnitsEnum[]
    HAlPotentialAcidity: UnitsEnum[]
  }
}

export const CalculatorConfig = {
  allUnits: [
    'cacl',
    'mgdm',
    'gdm',
    '%',
    'k2o',
    'h2o',
    'gkg',
    'mmol',
    'cmol',
    'tha',
    'nha',
    'p2o5',
    'ha',
    'ds',
    'kgkg',
  ],
  fieldsOptUnits: {
    sand: ['gkg', '%'],
    silt: ['gkg', '%'],
    clay: ['gkg', '%'],
    organicMatter: ['gdm', '%'],
    ph: ['cacl', 'h2o'],
    pPhosphor: ['mmol', 'cmol', 'mgdm'],
    kPotassium: ['mmol', 'cmol', 'mgdm'],
    naSodium: ['cmol', 'mgdm'],
    sSulfur: ['mmol', 'cmol', 'mgdm'],
    bBoron: ['mmol', 'cmol', 'mgdm'],
    cuCopper: ['mmol', 'cmol', 'mgdm'],
    feIron: ['mmol', 'cmol', 'mgdm'],
    mnManganese: ['mmol', 'cmol', 'mgdm'],
    znZinc: ['mmol', 'cmol', 'mgdm'],
    caCalcium: ['mmol', 'cmol'],
    mgMagnesium: ['mmol', 'cmol'],
    alAluminum: ['mmol', 'cmol'],
    HAlPotentialAcidity: ['mmol', 'cmol'],
  },
} as CalculatorConfigDTO

interface Units {
  cacl: string
  mgdm: string
  gdm: string
  porc: string
  k2o: string
  h2o: string
  gkg: string
  mmol: string
  cmol: string
  tha: string
  nha: string
  p2o5: string
  ha: string
  ds: string
  kgkg: string
}

export const unitys = CalculatorConfig.allUnits.reduce((a, v) => {
  const item = v === '%' ? { porc: v } : { [v]: v }

  return { ...a, ...item }
}, {} as Units)
