import { ITheme } from './ITheme'

import common from './common'
import lightTheme from './light'
import darkTheme from './dark'

export const light: ITheme = {
  ...common,
  ...lightTheme
}

export const dark: ITheme = {
  ...common,
  ...darkTheme
}
