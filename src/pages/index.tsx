import React from 'react'
import { Box } from 'rebass/styled-components'
import { IStyledProps } from '../interfaces/IStyledProps'
import { useSelector } from 'react-redux'
import Gallery from '../sections/Gallery'
import ProductCard from '../components/ProductCard'
import { IReducers } from '../store/reducers'

const Home: React.FC = (props: IStyledProps) => {
  const { products } = useSelector((state: IReducers) => state)

  return (
    <>
      {!products.data || products.loading ? (
        <></>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          width="100%"
        >
          <Gallery {...props}>
            {products.data.map((product, index) => {
              return (
                <ProductCard
                  id={index}
                  name={product.name}
                  image={product.image}
                  onSale={product.on_sale}
                  regularPrice={product.regular_price}
                  actualPrice={product.actual_price}
                  discount={product.discount_percentage}
                  sizes={product.sizes}
                  key={index}
                />
              )
            })}
          </Gallery>
        </Box>
      )}
    </>
  )
}

export default Home
