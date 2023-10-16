import { ICultureObjective } from '../dtos/report.dto'

export default function buildFertilizingPayload(data: any) {
  const fertilizingCultureObjective: ICultureObjective[] = []

  if (!data) return []

  const {
    fertilizing_objective_culture_before_milho,
    property_designation_alho,
    property_designation_pepino,
    property_designation_tomate,
    property_designation_batata,
    property_designation_mandioca,
    property_designation_maracuja,
    property_designation_abacaxi,
    p_k_for_expectation_cana_de_acucar,
    fertilizing_objective_culture,
  } = data

  fertilizing_objective_culture?.forEach((culture: any) => {
    const newCultureObj = {
      culture,
      ...(fertilizing_objective_culture_before_milho &&
        culture === 'Milho' && {
          culture_before: fertilizing_objective_culture_before_milho,
        }),
      ...(property_designation_alho &&
        culture === 'Alho' && {
          property_designation: property_designation_alho,
        }),
      ...(property_designation_pepino &&
        culture === 'Pepino' && {
          property_designation: property_designation_pepino,
        }),
      ...(property_designation_tomate &&
        culture === 'Tomate' && {
          property_designation: property_designation_tomate,
        }),
      ...(property_designation_batata &&
        culture === 'Batata' && {
          property_designation: property_designation_batata,
        }),
      ...(property_designation_mandioca &&
        culture === 'Mandioca' && {
          property_designation: property_designation_mandioca,
        }),
      ...(culture === 'Maracuja' && {
        property_designation: property_designation_maracuja,
      }),
      ...(property_designation_abacaxi &&
        culture === 'Abacaxi' && {
          property_designation: property_designation_abacaxi,
        }),
      ...(p_k_for_expectation_cana_de_acucar &&
        culture === 'Cana de açucar' && {
          p_k_for_expectation: p_k_for_expectation_cana_de_acucar,
        }),
    }

    fertilizingCultureObjective.push(newCultureObj)
  })

  return fertilizingCultureObjective
}
