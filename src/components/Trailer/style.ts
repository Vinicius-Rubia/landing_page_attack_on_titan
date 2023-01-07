import styled from "styled-components";

export const StyledTrailer = styled.section`
  grid-area: trailer;
  display: flex;
  gap: 30px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
