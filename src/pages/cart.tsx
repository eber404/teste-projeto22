import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Flex } from 'reflexbox'
import { IProduct } from '../interfaces/IProduct'
import { IReducers } from '../store/reducers'

const Cart: React.FC = props => {
  const [itemsOnCart, setItemsOnCart] = useState<IProduct[]>([])
  const { cart, products } = useSelector((state: IReducers) => state)

  useEffect(() => {
    cart.orders.map(order => {
      const item = products.data.find((p, index) => order.productId === index)

      setItemsOnCart([...itemsOnCart, item])
    })
  }, [cart.orders])

  return (
    <Flex>
      <Box width="100%" maxHeight="400px">
        <ul>
          {!itemsOnCart ? (
            <></>
          ) : (
            itemsOnCart.map((item, index) => <li key={index}>{item.name}</li>)
          )}
        </ul>
      </Box>
    </Flex>
  )
}
export default Cart
