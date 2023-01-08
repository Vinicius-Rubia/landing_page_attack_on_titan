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

  @media (max-width: 1200px) {
    display: block;
    padding: 30px 25px;

    .logo {
      margin-top: 30px;
    }

    h1 {
      margin-top: 100px;
    }
  }

  @media (max-width: 400px) {
    padding: 30px 10px;

    .logo {
      margin-top: 30px;
    }

    h1 {
      margin-top: 100px;

      span {
        font-size: 70px;
      }
    }

    .watch {
      P {
        letter-spacing: 7px;
      }
  }

    .social-media {
      gap: 0;
      justify-content: space-between;
    }
  }
`;
