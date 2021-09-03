import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 60%;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    font-family: "Roboto", sans-serif;
  }

  #wrapper {
    height: 100vh;
    width: 100vw;
  }

  @media (min-width: 700px) {
    :root {
        font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;