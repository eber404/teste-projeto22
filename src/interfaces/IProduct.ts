/* eslint-disable camelcase */
import { ProductSizeEnum } from '../enums/ProductSizeEnum'

export interface IProduct {
  name: string
  style: string
  code_color: string
  color_slug: string
  color: string
  on_sale: boolean
  regular_price: string
  actual_price: string
  discount_percentage: string
  installments: string
  image: string
  sizes: [
    {
      available: boolean
      size: ProductSizeEnum
      sku: string
    }
  ]
}
