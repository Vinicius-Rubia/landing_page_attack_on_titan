import styled from "styled-components";

export const StyledContentText = styled.section`
  grid-area: contentText;
  display: flex;
  padding: 60px;
  gap: 45px;

  svg {
    color: ${({ theme }) => theme.colors.whitePrimary};
  }

  h1 {
    margin-top: 150px;
  }

  .watch {
    margin: 24px 0;
    display: flex;
    gap: 20px;

    P {
      letter-spacing: 10px;
      font-family: 24px;
      color: ${({ theme }) => theme.colors.whitePrimary};
      font-weight: 300;
    }
  }

  .description {
      P {
        line-height: 21px;
        letter-spacing: 2px;
      }
    }

  .social-media {
    margin-top: 64px;
    display: flex;
    gap: 50px;
  }
`;
