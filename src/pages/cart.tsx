import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Flex } from 'reflexbox'
import { order } from 'styled-system'
import OrderCard from '../components/OrderCard'
import { IReducers } from '../store/reducers'

const Cart: React.FC = props => {
  const { cart, products } = useSelector((state: IReducers) => state)

  useEffect(() => {
    console.log('cart.orders', cart.orders)
  }, [])

  return (
    <Flex width="100%">
      <Box width="100%" maxHeight="400px">
        <ul>
          {cart.orders.map((order, index) => (
            <OrderCard
              image={order.image}
              name={order.name}
              price={order.price}
              size={order.size}
              key={index}
            />
          ))}
        </ul>
      </Box>
    </Flex>
  )
}
export default Cart
