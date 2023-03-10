import styled from "styled-components";

export const StyledTrailerCard = styled.div`
  min-width: 22rem;
  position: relative;
  margin-top: 1.6rem;

  a {
    position: absolute;
    left: 1.5rem;
    bottom: 1.5rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.whitePrimary};
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 600px) {
    min-width: 15rem;

    svg {
      font-size: 2rem;
    }
  }
`;
