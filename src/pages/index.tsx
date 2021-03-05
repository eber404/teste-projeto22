import React, { useEffect } from 'react'
import Head from 'next/head'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { IStyledProps } from '../interfaces/IStyledProps'
import { useDispatch } from 'react-redux'
import Gallery from '../sections/Gallery'
import ProductCard from '../components/ProductCard'
import data from '../data/db.json'

const Home: React.FC = (props: IStyledProps) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        <Gallery {...props}>
          {data.products.map((d, index) => {
            return (
              <ProductCard
                id={index}
                name={d.name}
                image={d.image}
                onSale={d.on_sale}
                regularPrice={d.regular_price}
                actualPrice={d.actual_price}
                discount={d.discount_percentage}
                sizes={d.sizes}
                key={index}
              />
            )
          })}
        </Gallery>
      </Box>
    </>
  )
}

export default Home
