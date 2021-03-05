import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: ${props => props.theme.transition.default};
  }

  body {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.detail};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }

  input, input, textarea, select {
    outline: none;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: none;
    color: unset;
  }
`
