import { ICreateSample, IFirstTableFields } from '../dtos/sample.dto'

interface Unity {
  unity: string
  value: number
}

export function transformFormToUnits(
  data: IFirstTableFields,
  itemConvert?: ICreateSample,
): ICreateSample {
  const newDate = {} as ICreateSample

  Object.keys(data).forEach((item) => {
    const exception = [
      'uf',
      'city',
      'tb_1_description_deep_culture',
      'description_cuture',
    ].includes(item)

    if (!exception) {
      ;(newDate as any)[item] = {
        unity: itemConvert && (itemConvert as any)[item]?.unity,
        value: (data as any)[item],
        confirmed: false,
      } as Unity
    } else {
      ;(newDate as any)[item] = (data as any)[item]
    }
  })

  return newDate
}
