import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  white: '#FFFFFF',
  orange: '#fff8f1',
  orangeStrong: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;

    body {
      background-color: ${colors.orange}
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
