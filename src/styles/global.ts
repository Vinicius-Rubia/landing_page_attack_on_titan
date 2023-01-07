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
    max-width: 1600px;
    margin: 0 auto;
  }

  .App {
    display: grid;
    grid-template-columns: 37.85% 62.15%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
      "contentText  slider"
      "contentText  trailer";
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  svg {
    cursor: pointer;
    transition: .4s;

    &:hover {
      filter: brightness(60%);
    }
  }

  img {
    max-width: 100%;
  }
`;

export const ColorsTheme = {
  colors: {
    whitePrimary: "#FFFFFF",
    whiteSecondary: "#D7DDEF",
    transparentColor: "rgba(255, 255, 255, 0.1)",
  },
};
