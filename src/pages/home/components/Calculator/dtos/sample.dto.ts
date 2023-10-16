import { CalculateEnum } from '../enum/calculate.enum'
import { ICultureObjective } from './report.dto'

export type UnitType =
  | 'cmol'
  | 'tha'
  | '%'
  | 'mgdm'
  | 'h2o'
  | 'cacl'
  | 'gdm'
  | 'gkg'
  | 'kgkg'

export interface IUnity {
  unity: UnitType
  value: number
  confirmed?: boolean
}

export interface IObjectiveCulture {
  culture: string
  culture_before?: string
  property_designation?: string
  n_nitron_tha?: string
  p_phosphor_for_expectation?: string
  p_phosphor_tha?: string
  k_potassium_tha?: string
  k_potassium_for_expectation?: string
  p_k_for_expectation?: string
}

export interface ICreateSample {
  user_id: string
  calculate: CalculateEnum[]
  description_cuture: string
  tb_1_description_deep_culture: string
  tb_1_clay: IUnity
  tb_1_silt: IUnity
  tb_1_sand: IUnity
  tb_2_organic_matter: IUnity
  tb_2_ph: IUnity
  tb_3_p_phosphor: IUnity
  tb_3_k_potassium: IUnity
  tb_3_na_sodium: IUnity
  tb_3_s_sulfur: IUnity
  tb_3_b_boron: IUnity
  tb_3_cu_copper: IUnity
  tb_3_fe_iron: IUnity
  tb_3_mn_manganese: IUnity
  tb_3_zn_zinc: IUnity
  tb_4_ca_calcium: IUnity
  tb_4_mg_magnesium: IUnity
  tb_4_al_aluminum: IUnity
  tb_4_h_al_potential_acidity: IUnity
  fertilizing_objective_culture?: IObjectiveCulture[]
  carbon_stock_density_soil?: string
  city: string
  uf: string
}

export interface IFirstTableFields {
  description_cuture: string
  tb_1_sand: number
  tb_1_silt: number
  tb_1_clay: number
  tb_2_organic_matter: number
  tb_2_ph: number
  tb_3_p_phosphor: number
  tb_3_k_potassium: number
  tb_3_na_sodium: number
  tb_3_s_sulfur: number
  tb_3_b_boron: number
  tb_3_cu_copper: number
  tb_3_fe_iron: number
  tb_3_mn_manganese: number
  tb_3_zn_zinc: number
  tb_4_ca_calcium: number
  tb_4_mg_magnesium: number
  tb_4_al_aluminum: number
  tb_4_h_al_potential_acidity: number
  city: string
  uf: string
}

export interface ISampleDTO {
  calculate: string[]
  description_cuture: string
  tb_1_description_deep_culture: string
  tb_1_clay: IUnity
  tb_1_silt: IUnity
  tb_1_sand: IUnity
  tb_2_organic_matter: IUnity
  tb_2_ph: IUnity
  tb_3_p_phosphor: IUnity
  tb_3_k_potassium: IUnity
  tb_3_na_sodium: IUnity
  tb_3_s_sulfur: IUnity
  tb_3_b_boron: IUnity
  tb_3_cu_copper: IUnity
  tb_3_fe_iron: IUnity
  tb_3_mn_manganese: IUnity
  tb_3_zn_zinc: IUnity
  tb_4_ca_calcium: IUnity
  tb_4_mg_magnesium: IUnity
  tb_4_al_aluminum: IUnity
  tb_4_h_al_potential_acidity: IUnity
  fertilizing_objective_culture?: ICultureObjective[]
  carbon_stock_density_soil: string
  city: string
  uf: string
}

export interface IConvertKey {
  [key: string]: IUnity
}
