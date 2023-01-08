import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 37.85% 62.15%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "contentText  slider"
    "contentText  trailer";

  @media (max-width: 1200px) {
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "contentText contentText"
      "trailer trailer"
      "slider slider";

    .section-trailer {
      width: 100vw;
      grid-template-columns: 100%;
      grid-template-rows: 100% 100% 100%;
      grid-template-areas:
        "contentText"
        "slider"
        "slider";
      margin-bottom: 3rem;
    }
  }
`;
