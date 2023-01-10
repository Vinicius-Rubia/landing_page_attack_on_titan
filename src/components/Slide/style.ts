import styled from "styled-components";

export const StyledSlide = styled.section`
  grid-area: slider;
  display: flex;
  flex-direction: column;

  .carousel {
    display: flex;
    scroll-behavior: smooth;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      width: 100%;
      flex: none;
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
    margin: 1.6rem 0 3rem;

    svg {
      color: ${({ theme }) => theme.colors.whiteSecondary};
    }

    .slide-counter {
      margin-right: 2.5rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
      font-size: 2rem;
      font-weight: 500;

      .start {
        color: ${({ theme }) => theme.colors.whitePrimary};
      }

      .end {
        color: ${({ theme }) => theme.colors.transparentColor};
      }

      .line-counter {
        width: 6.4rem;
        height: 0.3rem;
        background: ${({ theme }) => theme.colors.transparentColor};
      }
    }
  }

  @media (max-width: 1200px) {
    .controls {
      margin-left: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    .controls {
      margin-left: 1rem;

      svg {
        font-size: 3.5rem;
      }

      .slide-counter {
        margin-right: 1rem;
      }
    }
  }
`;
