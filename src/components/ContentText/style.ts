import styled from "styled-components";

export const StyledContentText = styled.section`
  grid-area: contentText;
  display: flex;
  padding: 6em;
  gap: 4.5em;

  svg {
    color: ${({ theme }) => theme.colors.whitePrimary};
  }

  h1 {
    margin-top: 15rem;
  }

  .watch {
    margin: 2.4rem 0;
    display: flex;
    gap: 2rem;

    P {
      letter-spacing: 1rem;
      color: ${({ theme }) => theme.colors.whitePrimary};
      font-weight: 300;
    }
  }

  .description {
    P {
      line-height: 2.1rem;
      letter-spacing: .2rem;
    }
  }

  .social-media {
    margin-top: 6.4rem;
    display: flex;
    gap: 5rem;
  }

  @media (max-width: 1200px) {
    .menu {
      position: absolute;
      inset: 4em 3em auto auto;
    }

    display: block;
    padding: 3rem 2.5rem;

    h1 {
      margin-top: 10rem;
    }

    .description {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    padding: 3rem 1rem;

    .menu {
      position: initial;
      display: flex;
      justify-content: center;
    }

    .logo {
      display: flex;
      margin: 3rem auto 0;
    }

    h1 {
      span {
        font-size: 7rem;
      }
    }

    .watch {
      P {
        letter-spacing: .7rem;
      }
    }

    .description {
      width: 100%;
      text-align: justify;
    }

    .social-media {
      gap: 0;
      justify-content: space-between;
    }
  }
`;
