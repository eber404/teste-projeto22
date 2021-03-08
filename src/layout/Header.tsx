import React, { useEffect, useState } from 'react'
import { Box } from 'reflexbox'
import SvgComponent from '../components/SvgComponent'
import Menu from './Menu'
import { IStyledProps } from '../interfaces/IStyledProps'
import { withTheme } from 'styled-components'
import { useSelector } from 'react-redux'
import { IReducers } from '../store/reducers'
import Cart from '../components/Cart'

const Header: React.FC<IStyledProps> = (props: IStyledProps) => {
  const [cartLength, setCartLength] = useState(0)

  const { cart } = useSelector((state: IReducers) => state)

  useEffect(() => {
    if (cart.orders) {
      setCartLength(cart.orders.length)
    }
  }, [cart.orders])

  return (
    <Box
      height="80px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      marginX="auto"
    >
      <Menu />
      <Cart />
    </Box>
  )
}

export default withTheme(Header)
