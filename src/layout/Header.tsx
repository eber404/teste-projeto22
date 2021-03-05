import React, { Component } from 'react'
import { Box } from 'reflexbox'
import Menu from './Menu'

const Header: React.FC = props => {
  return (
    <Box
      height="80px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Menu></Menu>
    </Box>
  )
}

export default Header
