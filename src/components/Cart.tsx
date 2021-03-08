import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Box } from 'reflexbox'
import styled from 'styled-components'
import { IReducers } from '../store/reducers'
import SvgComponent from './SvgComponent'
import Link from 'next/link'

const Cart = () => {
  const [cartLength, setCartLength] = useState(0)

  const { cart } = useSelector((state: IReducers) => state)

  useEffect(() => {
    if (cart.orders) {
      setCartLength(cart.orders.length)
    }
  }, [cart.orders])

  return (
    <Link href="/cart">
      <a>
        <SBox display="flex" flexDirection="column">
          {cartLength > 0 ? <Quantity>{cartLength}</Quantity> : <></>}
          <SvgComponent src="/assets/icons/shopping-cart.svg" margin="auto" />
        </SBox>
      </a>
    </Link>
  )
}

const SBox = styled(Box)`
  position: relative;
  cursor: pointer;
`

const Quantity = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: 13px;
  z-index: 1;
`

export default Cart
