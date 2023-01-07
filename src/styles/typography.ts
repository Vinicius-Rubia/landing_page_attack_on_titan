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
          font-size: 50px;
        `;
      case "md":
        return css`
          font-size: 24px;
        `;
      case "sm":
        return css`
          font-size: 16px;
        `;
    }
  }}
`;

interface IStyledParagraph {
  fontSize: "md" | "sm";
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
      case "md":
        return css`
          font-size: 14px;
        `;
      case "sm":
        return css`
          font-size: 10px;
        `;
    }
  }}
`;
