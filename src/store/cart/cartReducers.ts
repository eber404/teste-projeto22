import { IOrder } from '../../interfaces/IOrder'
import { groupBy } from '../../utils/groupBy'
import * as cartTypes from './cartTypes'
import { ICartAction, ICartState } from './cartTypes'

const INITIAL_STATE: ICartState = {
  orders: []
}

export const cartReducer = (
  state: ICartState = INITIAL_STATE,
  actions: ICartAction
): ICartState => {
  switch (actions.type) {
    case cartTypes.ADD_TO_CART: {
      const orders = [...state.orders]

      orders.push(actions.payload)
      return { ...state, orders }
    }
    case cartTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        orders: state.orders.filter(
          order => order.name !== actions.payload.name
        )
      }
    }
    default:
      return state
  }
}
