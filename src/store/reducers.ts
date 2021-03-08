import { combineReducers } from 'redux'
import { cartReducer } from './cart/cartReducers'
import { ICartState } from './cart/cartTypes'
import { ProductReducer } from './product/productReducers'
import { IProductState } from './product/productTypes'
import { themeReducer, ThemeState } from './theme/reducers'

export interface IReducers {
  theme: ThemeState
  products: IProductState
  cart: ICartState
}

export const reducers = {
  theme: themeReducer,
  products: ProductReducer,
  cart: cartReducer
}

export default combineReducers(reducers)
