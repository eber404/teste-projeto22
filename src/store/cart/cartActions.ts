import { order } from 'styled-system'
import { IOrder } from '../../interfaces/IOrder'
import * as cartTypes from './cartTypes'
import { ICartAction } from './cartTypes'

export const addToCart = (order: IOrder): ICartAction => {
  return {
    type: cartTypes.ADD_TO_CART,
    payload: order
  }
}

export const removeFromCart = (order: IOrder): ICartAction => {
  return {
    type: cartTypes.REMOVE_FROM_CART,
    payload: order
  }
}
