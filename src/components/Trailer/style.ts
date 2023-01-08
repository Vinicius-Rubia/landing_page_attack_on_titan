import styled from "styled-components";

export const StyledTrailer = styled.section`
  grid-area: trailer;
  display: block;

  .card-trailer {
    overflow-x: auto;
    display: flex;
    gap: 20px;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    margin: 0 25px;

    .card-trailer {
      display: flex;
      gap: 10px;
    }
  }

  @media (max-width: 400px) {
    margin: 0 10px;
  }
`;
