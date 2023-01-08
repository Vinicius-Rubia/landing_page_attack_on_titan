import styled from "styled-components";

export const StyledSlide = styled.section`
  grid-area: slider;
  display: flex;
  flex-direction: column;

  .controls {
    display: flex;
    justify-content: space-between;
    margin: 16px 0 30px;

    svg {
      color: ${({ theme }) => theme.colors.whiteSecondary};
    }

    .slide-counter {
      margin-right: 25px;
      display: flex;
      align-items: center;
      gap: 15px;
      font-size: 20px;
      font-weight: 500;

      .start {
        color: ${({ theme }) => theme.colors.whitePrimary};
      }

      .end {
        color: ${({ theme }) => theme.colors.transparentColor};
      }

      .line-counter {
        width: 64px;
        height: 3px;
        background: ${({ theme }) => theme.colors.transparentColor};
      }
    }
  }

  @media (max-width: 1200px) {
    .controls {
      margin-left: 25px;
    }
  }

  @media (max-width: 400px) {
    .controls {
      margin-left: 10px;

      svg {
        font-size: 35px;
      }

      .slide-counter {
        margin-right: 10px;
      }
    }
  }
`;
