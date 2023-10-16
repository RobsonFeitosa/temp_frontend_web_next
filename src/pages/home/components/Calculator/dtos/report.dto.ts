interface Unity {
  unity: string
  value: number
}

export interface ICultureObjective {
  culture: string
  culture_before?: string
  property_designation?: string
  p_phosphor_for_expectation?: string
  k_potassium_for_expectation?: string
  n_nitron_tha?: string
  p_phosphor_tha?: string
  k_potassium_tha?: string
  p_k_for_expectation?: string
}

export interface SampleDTO {
  calculate: string[]
  description_cuture: string
  tb_1_description_deep_culture: string
  tb_1_clay: Unity
  tb_1_silt: Unity
  tb_1_sand: Unity
  tb_2_organic_matter: Unity
  tb_2_ph: Unity
  tb_3_p_phosphor: Unity
  tb_3_k_potassium: Unity
  tb_3_na_sodium: Unity
  tb_3_s_sulfur: Unity
  tb_3_b_boron: Unity
  tb_3_cu_copper: Unity
  tb_3_fe_iron: Unity
  tb_3_mn_manganese: Unity
  tb_3_zn_zinc: Unity
  tb_4_ca_calcium: Unity
  tb_4_mg_magnesium: Unity
  tb_4_al_aluminum: Unity
  tb_4_h_al_potential_acidity: Unity
  fertilizing_objective_culture?: ICultureObjective[]
  carbon_stock_density_soil: string
  city: string
  uf: string
}

interface ISample {
  tb_1_description_deep_culture: string
  tb_1_clay: Unity
  tb_1_silt: Unity
  tb_1_sand: Unity
  tb_2_organic_matter: Unity
  tb_2_ph: Unity
  tb_3_p_phosphor: Unity
  tb_3_k_potassium: Unity
  tb_3_na_sodium: Unity
  tb_3_s_sulfur: Unity
  tb_3_b_boron: Unity
  tb_3_cu_copper: Unity
  tb_3_fe_iron: Unity
  tb_3_mn_manganese: Unity
  tb_3_zn_zinc: Unity
  tb_4_ca_calcium: Unity
  tb_4_mg_magnesium: Unity
  tb_4_al_aluminum: Unity
  tb_4_h_al_potential_acidity: Unity
  carbon_stock_density_soil?: string
  fertilizing_objective_culture?: ICultureObjective[]
}

interface IInterpretation {
  inter_tb_1_soil_class?: string
  inter_tb_3_p_phosphor?: string
  inter_tb_2_ph?: string
  inter_tb_3_s_sulfur?: string
  inter_tb_3_b_boron?: string
  inter_tb_3_k_potassium?: string
  inter_tb_3_cu_copper?: string
  inter_tb_3_fe_iron?: string
  inter_tb_3_mn_manganese?: string
  inter_tb_3_zn_zinc?: string
  inter_tb_4_ca_calcium?: string
  inter_tb_4_mg_magnesium?: string
  inter_tb_5_ctcph7?: string
  inter_tb_6_v_base_saturation?: string
  inter_tb_6_m_aluminum_saturation?: string
}

export interface ICalculatorGenericDTO {
  _ctcef: Unity
  _ctcph7: Unity
  _sum_bases: Unity
  _v_base_saturation: Unity
  _m_aluminum_saturation: Unity
}

export interface ICalculatorLimingDTO {
  _liming_NCpH60: Unity
  _liming_NCpH70: Unity
  _liming_NCpH70cPRNT70porc: Unity
}

export interface ICalculatorPlasterDTO {
  _calculate_plaster_need: Unity
}

export interface ICalculatorCarbonStockDTO {
  _carb_density_soil?: string | undefined
  _carb_value: Unity
}

export interface ICalculatorFertilizingDTO {
  objetive_culture: string
  before_culture?: string
  n_nitrogen?: number | string
  p_phosphor_fertilizing?: number | string
  p_phosphor_first_fertilizing?: number | string
  p_phosphor_second_fertilizing?: number | string
  p_phosphor_third_fertilizing?: number | string
  k_potassium_fertilizing?: number | string
  k_potassium_first_fertilizing?: number | string
  k_potassium_second_fertilizing?: number | string
  k_potassium_third_fertilizing?: number | string
  p_phosphor_pre_planting_fertilizing?: number | string
  k_potassium_pre_planting_fertilizing?: number | string
  n_nitrogenio_between_tha?: string
  k_potassium_between_tha?: string
  p_phosphor_between_tha?: string
  micro_nutrients_boron?: number | string
  micro_nutrients_zinc?: number | string
}

interface CarbonStock {
  _carb_density_soil?: string | undefined
  _carb_value: Unity
}

interface ICalculations {
  generic: ICalculatorGenericDTO
  liming?: ICalculatorLimingDTO
  plaster?: ICalculatorPlasterDTO
  carbon_stock?: CarbonStock | null
  fertilizing?: ICalculatorFertilizingDTO[] | null
  water_availability?: {
    tetaad: Unity
    tetacc: Unity
    tetapmp: Unity
  }
}

export interface IReportDTO {
  id: string
  user_id: string
  description_cuture: string
  data_sample: ISample
  interpretation_: IInterpretation
  calculations_: ICalculations
  city: string
  uf: string
  created_at: string
  updated_at: string
}
