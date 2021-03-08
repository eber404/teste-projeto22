import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Flex } from 'reflexbox'
import OrderCard from '../components/OrderCard'
import { IReducers } from '../store/reducers'
import { Text } from 'rebass'
import { IStyledProps } from '../interfaces/IStyledProps'
import { withTheme } from 'styled-components'

const Cart: React.FC<IStyledProps> = (props: IStyledProps) => {
  const { cart, products } = useSelector((state: IReducers) => state)

  return (
    <Flex width="100%" maxWidth="400px" justifyContent="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexDirection="column"
      >
        {cart.orders.length > 0 ? (
          cart.orders.map((order, index) => (
            <OrderCard
              image={order.image}
              name={order.name}
              price={order.price}
              size={order.size}
              key={index}
            />
          ))
        ) : (
          <Text color={props.theme.colors.details} fontWeight={400}>
            Carrinho vazio.
          </Text>
        )}
      </Box>
    </Flex>
  )
}
export default withTheme(Cart)
