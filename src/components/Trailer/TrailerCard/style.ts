import styled from "styled-components";

export const StyledTrailerCard = styled.div`
  min-width: 220px;
  color: ${({ theme }) => theme.colors.whitePrimary};
  position: relative;
  margin-top: 16px;

  div {
    position: absolute;
    left: 15px;
    bottom: 15px;
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
