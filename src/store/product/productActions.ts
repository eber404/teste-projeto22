import { FetchProductActions, ProductActionTypes } from './productTypes'
import { Dispatch } from 'react'
import { ProductService } from '../../services/implementations/ProductService'
import { IProduct } from '../../interfaces/IProduct'

export interface ProductActions {
  type: string
  payload: IProduct[]
}

const productService = new ProductService()

const fetchProductRequest = (): FetchProductActions => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_REQUEST,
    payload: null
  }
}

const fetchProductSuccess = (payload): FetchProductActions => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload
  }
}

const fetchProductFailure = (payload): FetchProductActions => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
    payload
  }
}

export const fetchProducts = () => {
  return (dispatch: Dispatch<ProductActions>): void => {
    dispatch(fetchProductRequest())
    productService
      .list()
      .then(response => {
        dispatch(fetchProductSuccess(response))
      })
      .catch(errorResult => {
        dispatch(fetchProductFailure(errorResult))
      })
  }
}
