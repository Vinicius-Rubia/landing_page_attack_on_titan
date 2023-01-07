import { createGlobalStyle } from "styled-components";
import Background from "../img/background.png";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: "Rubik", sans-serif;
  }

  body {
    background: url(${Background}) no-repeat;
    background-size: cover;
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
