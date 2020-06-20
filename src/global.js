import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  #root{
     box-shadow:inset 0 0 0 4000px ${({ theme }) => theme.body};
    // background: ${({ theme }) => theme.body};
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    // align-items: center;
    // background: ${({ theme }) => theme.body};
    // background: ${require("./assets/images/website_background.jpg")};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    // justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  `;