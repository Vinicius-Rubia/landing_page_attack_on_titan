import styled, { css } from "styled-components";
import BaseTitle from "./components/Typography";

export const StyledTitleSpan = styled(BaseTitle)`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme }) => theme.colors.whitePrimary};
  display: block;

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 9.6rem;
          line-height: 90%;
        `;
      case "md":
        return css`
          font-size: 2.4rem;
        `;
      case "sm":
        return css`
          font-size: 1.6rem;
        `;
    }
  }}
`;

interface IStyledParagraph {
  fontSize: "sm" | "md" | "lg";
  fontWeight: 300 | 500;
}

export const StyledParagraph = styled.p<IStyledParagraph>`
  color: ${({ theme }) => theme.colors.whiteSecondary};
  font-weight: ${({ fontWeight }) => fontWeight};

  strong,
  b {
    color: ${({ theme }) => theme.colors.whitePrimary};
    font-weight: 500;
  }

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 2.4rem;
        `;
      case "md":
        return css`
          font-size: 1.4rem;
        `;
      case "sm":
        return css`
          font-size: 1rem;
        `;
    }
  }}
`;
