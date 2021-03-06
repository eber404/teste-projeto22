import { IProduct } from '../../interfaces/IProduct'

export enum ProductActionTypes {
  FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
}

export interface IProductState {
  data: IProduct[] | null
  error?: unknown
  loading: boolean
}

export interface FetchProductActions {
  type:
    | typeof ProductActionTypes.FETCH_PRODUCTS_REQUEST
    | typeof ProductActionTypes.FETCH_PRODUCTS_SUCCESS
    | typeof ProductActionTypes.FETCH_PRODUCTS_FAILURE
  payload: IProduct[]
}

export type ProductActions = FetchProductActions
