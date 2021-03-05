import Link from 'next/link'
import React from 'react'
import { Text } from 'rebass'
import { Box, Flex } from 'reflexbox'
import styled, { withTheme } from 'styled-components'
import { IStyledProps } from '../interfaces/IStyledProps'

interface ISize {
  available: boolean
  size: string
  sku: string
}

interface IProductCard extends IStyledProps {
  id: number
  image: string
  name: string
  onSale: boolean
  regularPrice: string
  actualPrice: string
  sizes: ISize[]
  discount: string
}

const ProductCard: React.FC<IProductCard> = (props: IProductCard) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginBottom="30px"
    >
      <Link href={`/product/${props.id}`}>
        <a>
          <SBox width="380px" height="auto">
            <SDiscount display={props.discount.length > 0 ? 'flex' : 'none'}>
              -{props.discount}
            </SDiscount>
            <SImage
              src={
                props.image.length !== 0
                  ? props.image
                  : '/assets/images/default-placeholder.png'
              }
            ></SImage>
            {props.image.length > 0 ? <Overlay /> : null}
          </SBox>
        </a>
      </Link>
      <Text
        marginTop="10px"
        marginRight="auto"
        fontSize="16px"
        color={props.theme.colors.subTitle}
      >
        <Link href={`/product/${props.id}`}>
          <a>{props.name}</a>
        </Link>
      </Text>

      <Box display="flex" width="100%" mt="5px">
        <SText fontSize="14px" color={props.theme.colors.title}>
          <Link href={`/product/${props.id}`}>
            <a>
              {props.actualPrice}
              <label>
                {props.actualPrice !== props.regularPrice
                  ? props.regularPrice
                  : null}
              </label>
            </a>
          </Link>
        </SText>
      </Box>
    </Flex>
  )
}

const SBox = styled(Box)`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`

const SDiscount = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  left: 10px;
  background-color: tomato;
  font-size: 14px;
  color: #fff;
  padding: 3px 6px;
  z-index: 3;
`

const SText = styled(Text)`
  & label {
    font-size: 14px;
    color: ${props => props.theme.colors.detail};
    text-decoration: line-through;
    padding-left: 10px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  z-index: 2;
`

const SImage = styled.img`
  width: 100%;
  height: auto;
  z-index: 1;

  ${SBox}:hover & {
    transform: scale(1.1);
  }
`

export default withTheme(ProductCard)
