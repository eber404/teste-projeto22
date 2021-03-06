import React from 'react'
import { useRouter } from 'next/router'

const Product: React.FC = props => {
  const router = useRouter()
  const { id } = router.query
  console.log('props', id)

  return <h2>id: {id}</h2>
}

export default Product
