import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Rubik", sans-serif;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  img {
    max-width: 100%;
  }
`;

export const ColorsTheme = {
  colors: {
    whitePrimary: "#FFFFFF",
    whiteSecondary: "#D7DDEF",
  },
};
