import { z } from 'zod'

export const calculateSingleFormSchema = z.object({
  description_cuture: z.string().nonempty(),
  tb_1_description_deep_culture: z.string().nonempty(),
  tb_1_clay: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_1_silt: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_1_sand: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_2_organic_matter: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_2_ph: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_p_phosphor: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_k_potassium: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_na_sodium: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_s_sulfur: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_b_boron: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_cu_copper: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_fe_iron: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_mn_manganese: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_3_zn_zinc: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_4_ca_calcium: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_4_mg_magnesium: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_4_al_aluminum: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  tb_4_h_al_potential_acidity: z
    .number()
    .transform((data) => Number(data.toFixed(2)))
    .default(0),
  uf: z.string().nonempty(),
  city: z.string().nonempty(),
})
// .transform((data) => {
//   const reponse = data

//   const getItem = (unity: string) => {
//     const tb1 = ['tb_1_clay', 'tb_1_silt', 'tb_1_sand']
//     if (tb1.includes(unity)) return 'gkg'

//     const tb2 = ['tb_2_organic_matter']
//     if (tb2.includes(unity)) return 'gdm'

//     const tb3 = ['tb_2_ph']
//     if (tb3.includes(unity)) return 'h2o'

//     const tb4 = [
//       'tb_3_p_phosphor',
//       'tb_3_k_potassium',
//       'tb_3_na_sodium',
//       'tb_3_s_sulfur',
//       'tb_3_b_boron',
//       'tb_3_cu_copper',
//       'tb_3_fe_iron',
//       'tb_3_mn_manganese',
//       'tb_3_zn_zinc ',
//     ]
//     if (tb4.includes(unity)) return 'mgdm'

//     const tb5 = [
//       'tb_4_ca_calcium',
//       'tb_4_mg_magnesium',
//       'tb_4_al_aluminum',
//       'tb_4_h_al_potential_acidity',
//     ]
//     if (tb5.includes(unity)) return 'cmol'

//     return 'non-exist'
//   }

//   Object.keys(reponse).forEach((item, index) => {
//     ;(reponse as any)[item] = {
//       unity: getItem(item),
//       value: item,
//     }
//   })

//   return reponse
// })
