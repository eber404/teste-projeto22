import { IOrder } from '../../interfaces/IOrder'

// REDUX ACTION TYPES
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export interface ICartAction {
  type: string
  payload: IOrder
}

// state
export interface ICartState {
  orders: IOrder[] | null
}
