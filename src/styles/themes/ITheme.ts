import common from './common'
import light from './light'
import dark from './dark'

type Common = typeof common
type Light = typeof light
type Dark = typeof dark

export interface ITheme extends Common, Light, Dark {}
