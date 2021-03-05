import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { dark, light } from '../styles/themes'
import { IReducers } from '../store/reducers'
import { IStyledProps } from '../interfaces/IStyledProps'
import Header from './Header'

const Layout: React.FC<IStyledProps> = (props: IStyledProps) => {
  const { theme } = useSelector((state: IReducers) => state)
  return (
    <ThemeProvider theme={theme.dark ? dark : light}>
      <SBox>
        <Header></Header>
        <Main {...props}>{props.children}</Main>
      </SBox>
    </ThemeProvider>
  )
}

const SBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px ${props => props.theme.space[3]};
  margin-bottom: 100px;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1280px;
  width: 100%;
  height: 100%;
`

export default Layout
