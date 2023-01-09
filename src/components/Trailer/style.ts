import styled from "styled-components";

export const StyledTrailer = styled.section`
  grid-area: trailer;

  img {
    pointer-events: none;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
    .card-trailer {
      display: flex;
      gap: 2rem;
    }
  }

  @media (max-width: 1200px) {
    margin: 0 2.5rem;
    .carousel {
      .card-trailer {
        gap: 1rem;
      }
    }
  }
  @media (max-width: 600px) {
    margin: 0 1rem;
  }
`;
