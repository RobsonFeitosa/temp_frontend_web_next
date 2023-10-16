import { ICreateSample, IFirstTableFields } from '../../../dtos/sample.dto'

export function defaultFieldsBuild(samplesOrder: ICreateSample[]) {
  return samplesOrder.map((sample: ICreateSample): IFirstTableFields => {
    return {
      description_cuture: sample.description_cuture,
      tb_1_sand: sample.tb_1_sand.value,
      tb_1_silt: sample.tb_1_silt.value,
      tb_1_clay: sample.tb_1_clay.value,
      tb_2_organic_matter: sample.tb_2_organic_matter.value,
      tb_2_ph: sample.tb_2_ph.value,
      tb_3_p_phosphor: sample.tb_3_p_phosphor.value,
      tb_3_k_potassium: sample.tb_3_k_potassium.value,
      tb_3_na_sodium: sample.tb_3_na_sodium.value,
      tb_3_s_sulfur: sample.tb_3_s_sulfur.value,
      tb_3_b_boron: sample.tb_3_b_boron.value,
      tb_3_cu_copper: sample.tb_3_cu_copper.value,
      tb_3_fe_iron: sample.tb_3_fe_iron.value,
      tb_3_mn_manganese: sample.tb_3_mn_manganese.value,
      tb_3_zn_zinc: sample.tb_3_zn_zinc.value,
      tb_4_ca_calcium: sample.tb_4_ca_calcium.value,
      tb_4_mg_magnesium: sample.tb_4_mg_magnesium.value,
      tb_4_al_aluminum: sample.tb_4_al_aluminum.value,
      tb_4_h_al_potential_acidity: sample.tb_4_h_al_potential_acidity.value,
      uf: sample.uf,
      city: sample.city,
    }
  })
}
