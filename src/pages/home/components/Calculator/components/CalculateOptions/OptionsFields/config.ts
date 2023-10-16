export const fieldsOptionsAdvanced = [
  'Milho',
  'Tomate',
  'Alho',
  'Pepino',
  'Maracuja',
  'Batata',
  'Cana de açucar',
  'Abacaxi',
]

export const Fields = {
  milho: 'Milho',
  feijao: 'Feijão',
  arrozDeSequeiro: 'Arroz de sequeiro',
  alho: 'Alho',
  soja: 'Soja',
  sorgo: 'Sorgo',
  gramineas: 'Gramíneas',
  abobora: 'Abóbora',
  aboboraMoranga: 'Abóbora Moranga',
  alface: 'Alface',
  chicoria: 'Chicória',
  almeirao: 'Almeirão',
  rucula: 'Rúcula',
  beterraba: 'Beterraba',
  cenoura: 'Cenoura',
  melancia: 'Melancia',
  melao: 'Melão',
  pimentao: 'Pimentão',
  batataDoce: 'Batata-doce',
  pepino: 'Pepino',
  tomate: 'Tomate',
  batata: 'Batata',
  maracuja: 'Maracuja',
  mandioca: 'Mandioca',
  abacaxi: 'Abacaxi',
  canaDeAcucar: 'Cana de açucar',
  eucalipto: 'Eucalipto',
}

export const optionsCulture = [
  { value: 'Arroz de sequeiro', label: 'Arroz de sequeiro' },
  { value: 'Feijão', label: 'Feijão' },
  { value: 'Milho', label: 'Milho' },
  { value: 'Soja', label: 'Soja' },
  { value: 'Sorgo', label: 'Sorgo' },
  { value: 'Gramíneas', label: 'Gramíneas' },
  { value: 'Abóbora', label: 'Abóbora' },
  { value: 'Abóbora Moranga', label: 'Abóbora Moranga' },
  { value: 'Alface', label: 'Alface' },
  { value: 'Chicória', label: 'Chicória' },
  { value: 'Almeirão', label: 'Almeirão' },
  { value: 'Rúcula', label: 'Rúcula' },
  { value: 'Alho', label: 'Alho' },
  { value: 'Beterraba', label: 'Beterraba' },
  { value: 'Cenoura', label: 'Cenoura' },
  { value: 'Melancia', label: 'Melancia' },
  { value: 'Melão', label: 'Melão' },
  { value: 'Pepino', label: 'Pepino' },
  { value: 'Pimentão', label: 'Pimentão' },
  { value: 'Tomate', label: 'Tomate' },
  { value: 'Batata-doce', label: 'Batata-doce' },
  { value: 'Batata', label: 'Batata' },
  { value: 'Mandioca', label: 'Mandioca' },
  { value: 'Abacaxi', label: 'Abacaxi' },
  { value: 'Maracuja', label: 'Maracuja' },
  { value: 'Cana de açucar', label: 'Cana de açucar' },
  { value: 'Eucalipto', label: 'Eucalipto' },
]

export const OptionsDeepCulture = [
  { value: '0 a 5', label: '0 a 5' },
  { value: '0 a 10', label: '0 a 10' },
  { value: '10 a 20', label: '10 a 20' },
  { value: '20 a 40', label: '20 a 40' },
]

export const OptionsDensidadeSolo = [
  { value: '0.5 a 1.1', label: '0.5 a 1.1' },
  { value: '1.2 a 1.5', label: '1.2 a 1.5' },
  { value: '1.6 a 1.8', label: '1.6 a 1.8' },
  { value: '1.9 a 2.0', label: '1.9 a 2.0' },
]

export const ValuesField = [
  Fields.milho,
  Fields.alho,
  Fields.pepino,
  Fields.tomate,
  Fields.maracuja,
  Fields.batata,
  Fields.canaDeAcucar,
  Fields.abacaxi,
]

export const FieldsValuesOptions = {
  milho: [
    {
      value: 'Leguminosa',
      label: 'Leguminosa',
    },
    {
      value: 'Consórcio ou pousio',
      label: 'Consórcio ou pousio',
    },
    {
      value: 'Gramínea',
      label: 'Gramínea',
    },
  ],
  alho: {
    property_designation: [
      {
        value: '6 a 8',
        label: '6 a 8',
      },
      {
        value: '9 a 11',
        label: '9 a 11',
      },
      {
        value: '12 a 15',
        label: '12 a 15',
      },
    ],
  },
  pepino: {
    property_designation: [
      {
        value: 'Para conserva',
        label: 'Para conserva',
      },
      {
        value: 'Para salada',
        label: 'Para salada',
      },
    ],
    p_phosphor_for_expectation: [
      {
        value: 'Para conserva',
        label: 'Para conserva',
      },
      {
        value: 'Para salada',
        label: 'Para salada',
      },
    ],
    k_potassium_for_expectation: [
      {
        value: 'Para conserva',
        label: 'Para conserva',
      },
      {
        value: 'Para salada',
        label: 'Para salada',
      },
    ],
  },
  tomate: {
    property_designation: [
      {
        value: '50',
        label: '50',
      },
      {
        value: '75',
        label: '75',
      },
      {
        value: '100',
        label: '100',
      },
    ],
  },
  batata: {
    property_designation: [
      {
        value: '<=20',
        label: '<=20',
      },
      {
        value: '>20',
        label: '>20',
      },
    ],
  },
  maracuja: {
    property_designation: [
      {
        value: '1º ano',
        label: '1º ano',
      },
      {
        value: '2º ano',
        label: '2º ano',
      },
      {
        value: '3º ano',
        label: '3º ano',
      },
    ],
  },
  abacaxi: {
    property_designation: [
      {
        value: 'Primeira safra',
        label: 'Primeira safra',
      },
      {
        value: 'Segunda safra',
        label: 'Segunda safra',
      },
    ],
  },
  eucalipto: {
    property_designation: [
      {
        value: 'Plantio',
        label: 'Plantio',
      },
      {
        value: 'Cobertura',
        label: 'Cobertura',
      },
    ],
    k_potassium_for_expectation: [
      {
        value: 'Plantio',
        label: 'Plantio',
      },
      {
        value: 'Cobertura',
        label: 'Cobertura',
      },
      {
        value: 'Reposição',
        label: 'Reposição',
      },
    ],
  },
  canaDeAcucar: {
    p_k_for_expectation: [
      {
        value: '<80',
        label: '<80',
      },
      {
        value: '80 a 100',
        label: '80 a 100',
      },
      {
        value: '> 100',
        label: '> 100',
      },
    ],
  },
}
