import { combineReducers } from 'redux'
import { MenuState, menuReducer } from './menu/MenuReducers'
import { themeReducer, ThemeState } from './theme/reducers'

export interface IReducers {
  theme: ThemeState
  menu: MenuState
}

export const reducers = {
  theme: themeReducer,
  menu: menuReducer
}

export default combineReducers(reducers)
