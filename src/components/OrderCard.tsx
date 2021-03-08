import React from 'react'
import { Text } from 'rebass'
import { Box, Flex } from 'reflexbox'
import styled, { withTheme } from 'styled-components'
import { IOrder } from '../interfaces/IOrder'
import { IStyledProps } from '../interfaces/IStyledProps'

interface IOrderCard extends IStyledProps, IOrder {}

const OrderCard: React.FC<IOrderCard> = (props: IOrderCard) => {
  return (
    <Flex padding="15px" alignItems="center" width="100%">
      <Box height="100px" width="auto">
        <SImage src={props.image}></SImage>
      </Box>
      <Box display="flex" flexDirection="column">
        <Text fontSize="16px" color={props.theme.colors.title}>
          {props.name}
        </Text>
        <Text fontWeight="400" color={props.theme.colors.details}>
          Tamanho: {props.size}
        </Text>
      </Box>
      <Box display="flex" marginLeft="auto">
        <Text color={props.theme.colors.subTitle}>{props.price}</Text>
      </Box>
    </Flex>
  )
}

const SImage = styled.img`
  height: 100%;
  width: auto;
`

export default withTheme(OrderCard)
