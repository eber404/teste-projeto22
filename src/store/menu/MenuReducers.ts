import * as types from './MenuTypes'
import { MenuAction } from './MenuActions'
import { MenuItemEnum } from '../../enums/MenuItemEnum'

export interface MenuState {
  activeItem: MenuItemEnum
}

const INITIAL_STATE: MenuState = {
  activeItem: MenuItemEnum.HOME
}

// COUNTER REDUCER
export const menuReducer = (
  state: MenuState = INITIAL_STATE,
  actions: MenuAction
): MenuState => {
  switch (actions.type) {
    case types.SET_ACTIVE_ITEM:
      return { ...state, activeItem: actions.menu.activeItem }
    default:
      return state
  }
}
