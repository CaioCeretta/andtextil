import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  html, body, #root {
    // height: 100%;  /* Garante que o HTML e o body ocupem a altura total */
    // width: 100%;
    // margin: 0;
  }

  body {
    background: ${(props) => props.theme.white};
    color: rgb(82 82 91);
    font-family: "Poppins", serif;
  }

  body, input, textarea, button {
    font-weight: 400;
    font-size: 1.2em;
  }
`