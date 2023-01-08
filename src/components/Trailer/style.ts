import styled from "styled-components";

export const StyledTrailer = styled.section`
  grid-area: trailer;
  display: block;

  .card-trailer {
    overflow-x: auto;
    display: flex;
    gap: 2rem;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    margin: 0 2.5rem;

    .card-trailer {
      display: flex;
      gap: 1rem;
    }
  }

  @media (max-width: 600px) {
    margin: 0 1rem;
  }
`;
