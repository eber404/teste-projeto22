import { combineReducers } from 'redux'
import { ProductReducer } from './product/productReducers'
import { IProductState } from './product/productTypes'
import { themeReducer, ThemeState } from './theme/reducers'

export interface IReducers {
  theme: ThemeState
  products: IProductState
}

export const reducers = {
  theme: themeReducer,
  products: ProductReducer
}

export default combineReducers(reducers)
