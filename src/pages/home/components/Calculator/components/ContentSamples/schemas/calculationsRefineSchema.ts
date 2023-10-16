import { z } from 'zod'
import { Fields } from '../../CalculateOptions/OptionsFields/config'

export const calculationsRefineSchema = z
  .object({
    fertilizing_objective_culture_before_milho: z.string().optional(),
    property_designation_alho: z.string().optional(),
    property_designation_pepino: z.string().optional(),
    property_designation_tomate: z.string().optional(),
    property_designation_batata: z.string().optional(),
    property_designation_maracuja: z.string().optional(),
    property_designation_abacaxi: z.string().optional(),
    k_potassium_for_expectation_eucalipto: z.string().optional(),
    p_k_for_expectation_cana_de_acucar: z.string().optional(),
    carbon_stock_density_soil: z.string().optional(),
    is_liming_fertilizing: z.boolean().optional(),
    is_plaster_fertilizing: z.boolean().optional(),
    is_fertilizing_fertilizing: z.boolean().optional(),
    is_carbon_stock_fertilizing: z.boolean().optional(),
    is_water_availability_fertilizing: z.boolean().optional(),
    fertilizing_objective_culture: z
      .array(
        z.object({
          value: z.string().optional(),
          label: z.string().optional(),
          // culture: z.string().optional(),
          // culture_before: z.string().optional(),
          // property_designation: z.string().optional(),
          // p_k_for_expectation: z.string().optional(),
        }),
      )
      .optional()
      .transform((data) => data?.map((item) => item.value)),
  })
  .refine(
    (schema) =>
      schema.is_fertilizing_fertilizing
        ? schema.fertilizing_objective_culture &&
          schema.fertilizing_objective_culture?.length > 0 &&
          !!schema.fertilizing_objective_culture
        : true,

    {
      message: 'Campo obrigatório',
      path: ['fertilizing_objective_culture'],
    },
  )
  .refine(
    (schema) =>
      schema.fertilizing_objective_culture?.includes(Fields.milho)
        ? !!schema.fertilizing_objective_culture_before_milho
        : true,

    {
      message: 'Campo obrigatório',
      path: ['fertilizing_objective_culture_before_milho'],
    },
  )
  .refine(
    (schema) =>
      schema.fertilizing_objective_culture?.includes(Fields.tomate)
        ? !!schema.property_designation_tomate
        : true,
    {
      message: 'Campo obrigatório',
      path: ['property_designation_tomate'],
    },
  )
  .refine(
    (schema) =>
      schema.fertilizing_objective_culture?.includes(Fields.alho)
        ? !!schema.property_designation_alho
        : true,
    {
      message: 'Campo obrigatório',
      path: ['property_designation_alho'],
    },
  )
  .refine(
    (schema) =>
      schema.fertilizing_objective_culture?.includes(Fields.pepino)
        ? !!schema.property_designation_pepino
        : true,
    {
      message: 'Campo obrigatório',
      path: ['property_designation_pepino'],
    },
  )
  .refine(
    (schema) =>
      schema.fertilizing_objective_culture?.includes(Fields.maracuja)
        ? !!schema.property_designation_maracuja
        : true,
    {
      message: 'Campo obrigatório',
      path: ['property_designation_maracuja'],
    },
  )
  .refine(
    (schema) =>
      schema.fertilizing_objective_culture?.includes(Fields.batata)
        ? !!schema.property_designation_batata
        : true,
    {
      message: 'Campo obrigatório',
      path: ['property_designation_batata'],
    },
  )
  .refine(
    (schema) =>
      schema.fertilizing_objective_culture?.includes(Fields.canaDeAcucar)
        ? !!schema.p_k_for_expectation_cana_de_acucar
        : true,
    {
      message: 'Campo obrigatório',
      path: ['p_k_for_expectation_cana_de_acucar'],
    },
  )
  .refine(
    (schema) =>
      schema.fertilizing_objective_culture?.includes(Fields.abacaxi)
        ? !!schema.property_designation_abacaxi
        : true,
    {
      message: 'Campo obrigatório',
      path: ['property_designation_abacaxi'],
    },
  )
  .refine(
    (schema) =>
      schema.is_carbon_stock_fertilizing
        ? !!schema.carbon_stock_density_soil
        : true,
    {
      message: 'Campo obrigatório',
      path: ['carbon_stock_density_soil'],
    },
  )
  .optional()
