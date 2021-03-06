import { ProductActions } from './productActions'
import { IProductState, ProductActionTypes } from './productTypes'

const INITIAL_STATE: IProductState = {
  data: null,
  loading: false
}

export const ProductReducer = (
  state: IProductState = INITIAL_STATE,
  action: ProductActions
): IProductState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        data: null,
        loading: true
      }
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        data: null,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
