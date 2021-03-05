import { Label } from '@rebass/forms'
import React from 'react'
import { Box, Flex } from 'reflexbox'
import styled from 'styled-components'
import Link from 'next/link'

const Menu: React.FC = () => {
  return (
    <Flex>
      <Link href="/">
        <Anchor>Home</Anchor>
      </Link>
      <Link href="/blog">
        <Anchor>Blog</Anchor>
      </Link>
      <Link href="/contato">
        <Anchor>Contato</Anchor>
      </Link>
    </Flex>
  )
}

const Anchor = styled.a`
  color: #000;
  font-weight: 700;
  font-size: 16px;
  margin: 0 16px;
  cursor: pointer;
`

export default Menu
