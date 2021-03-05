import React from 'react'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { IStyledProps } from '../interfaces/IStyledProps'
import Masonry from 'react-masonry-component'

const Gallery = (props: IStyledProps) => {
  return (
    <StyledBox>
      <Masonry
        options={{
          gutter: 15,
          fitWidth: true
        }}
      >
        {props.children}
      </Masonry>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: -22.5px;
  margin-right: -22.5px;
`

export default Gallery
