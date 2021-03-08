import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { IReducers } from '../store/reducers'
import { Box, Flex } from 'reflexbox'
import { IProduct } from '../interfaces/IProduct'
import styled, { withTheme } from 'styled-components'
import { Button, Text } from 'rebass'
import { IStyledProps } from '../interfaces/IStyledProps'
import { Label, Radio } from '@rebass/forms'
import { up, down, between, only } from 'styled-breakpoints'
import { addToCart } from '../store/cart/cartActions'
import { IOrder } from '../interfaces/IOrder'
import { breakpoints } from '../styles/media'

const Product: React.FC<IStyledProps> = props => {
  const dispatch = useDispatch()

  const [product, setProduct] = useState<IProduct>(null)
  const [size, setSize] = useState<string>(null)

  const router = useRouter()
  const { id } = router.query

  const { products } = useSelector((state: IReducers) => state)

  const handleOrder = () => {
    const order: IOrder = {
      name: product.name,
      image: product.image,
      price: product.actual_price,
      size
    }

    dispatch(addToCart(order))
  }

  useEffect(() => {
    if (!products.loading && products.data && id) {
      const selectedProduct = products.data[+id]

      setProduct(selectedProduct)
    }
  }, [products.loading])

  return !product ? (
    <></>
  ) : (
    <SFlex>
      <ImageBox width="100%" maxWidth="380px" style={{ position: 'relative' }}>
        <SImage src={product.image}></SImage>
        <Overlay />
      </ImageBox>
      <SBox
        display="flex"
        flexDirection="column"
        paddingLeft="50px"
        maxWidth="480px"
      >
        <Title>{product.name}</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum elit ac dolor dictum, nec iaculis nunc dictum. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </Description>
        <Division>
          <MText
            fontSize="12px"
            fontWeight="700"
            color={props.theme.colors.subTitle}
            alignItems="center"
          >
            TAMANHOS
          </MText>
          <Box display="flex">
            {product.sizes.map((s, index) => {
              if (!s.available) return
              return (
                <Label
                  key={index}
                  display="flex"
                  alignItems="center"
                  marginRight="20px"
                  color={props.theme.colors.details}
                >
                  <Radio
                    name="size"
                    id={s.sku}
                    value={s.size}
                    disabled={!s.available}
                    onClick={() => setSize(s.size)}
                  ></Radio>
                  {s.size}
                </Label>
              )
            })}
          </Box>
        </Division>
        <Division flexDirection={down('md') ? 'column' : 'row'}>
          <SText>
            {product.actual_price}
            <label>{product.installments}</label>
          </SText>
          <SButton onClick={() => handleOrder()}>Comprar</SButton>
        </Division>
      </SBox>
    </SFlex>
  )
}

const SBox = styled(Box)`
  ${down('md')} {
    padding: 35px 0 !important;
  }
`

const SFlex = styled(Flex)`
  padding: 0 50px;
  width: 100%;
  justify-content: center;

  ${down('md')} {
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
  }
`

const ImageBox = styled(Box)`
  ${down('md')} {
    max-width: unset;
    width: 100% !important;
  }
`

const MText = styled(Text)`
  display: flex;
  ${down('md')} {
    display: none !important;
  }
`

const Division = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px !important;
  padding-top: 20px !important;
  border-top: 1px solid ${props => props.theme.colors.foreground};
  ${down('md')} {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`

const SButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white} !important;
  margin-top: 15px !important;
  cursor: pointer;

  ${down('md')} {
    width: 100%;
  }
`

const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.title};
`

const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.subTitle};
  word-wrap: break-word;
  font-weight: 400;
  margin-top: 15px;
  line-height: 22px;
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
`

const SText = styled(Text)`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${props => props.theme.colors.title};

  & label {
    font-size: 14px;
    color: ${props => props.theme.colors.details};
    padding-left: 10px;
  }
`

export default withTheme(Product)
