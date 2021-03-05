import * as types from './MenuTypes'
import { MenuState } from './MenuReducers'

export interface MenuAction {
  type: string
  menu: MenuState
}

// TOGGLE THEME MODE
export const setActiveItem = (menu: MenuState): MenuAction => {
  return {
    type: types.SET_ACTIVE_ITEM,
    menu
  }
}
