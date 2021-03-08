import React from 'react'
import { Text } from 'rebass'
import { Box, Flex } from 'reflexbox'
import styled, { withTheme } from 'styled-components'
import { IOrder } from '../interfaces/IOrder'
import { IStyledProps } from '../interfaces/IStyledProps'
import { down, up } from 'styled-breakpoints'

interface IOrderCard extends IStyledProps, IOrder {}

const OrderCard: React.FC<IOrderCard> = (props: IOrderCard) => {
  return (
    <Flex padding="15px" alignItems="center" width="100%" flexWrap="wrap">
      <Box width="100%" maxWidth="100px" height="auto">
        <SImage src={props.image}></SImage>
      </Box>
      <Box display="flex" flexDirection="column" ml="15px">
        <Text fontSize="16px" color={props.theme.colors.title}>
          {props.name}
        </Text>
        <Text fontWeight="400" color={props.theme.colors.details}>
          Tamanho: {props.size}
        </Text>
        <Text mt="15px" color={props.theme.colors.subTitle}>
          {props.price}
        </Text>
      </Box>
    </Flex>
  )
}

const SImage = styled.img`
  height: auto;
  width: 100%;
`

export default withTheme(OrderCard)
