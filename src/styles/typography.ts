import styled, { css } from "styled-components";
import BaseTitle from "./components/Typography";

export const StyledTitle = styled(BaseTitle)`
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme }) => theme.colors.whitePrimary};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 85px;
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
  fontSize: "md";
}

export const StyledParagraph = styled.p<IStyledParagraph>`
  color: ${({ theme }) => theme.colors.whiteSecondary};
  font-weight: 300;

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
    }
  }}
`;
