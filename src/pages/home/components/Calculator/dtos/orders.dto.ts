interface ICalculationsOptions {
  calculation_option: string
  value: string | null
}
export default interface ICreateOrderDTO {
  calculations: {
    names: string[]
    fertilizing?: ICalculationsOptions[]
    stock_carbon?: ICalculationsOptions
  }
}

export interface CalculateOPtions {
  calculations: {
    actParent: false
    names: []
    fertilizing: []
    carbon_stock: {
      calculation_option: string
      value: string
    }
  }
}

export interface IOrders {
  total: number
  data: {
    id: string
    sample_id: string | null
    cod_order: string
    calculate_options: string
    created_at: Date
    updated_at: Date
  }[]
}
