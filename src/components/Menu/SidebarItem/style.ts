import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.whitePrimary};
  padding: 1rem;
  border-radius: 1rem;
  margin: 3rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.whiteSecondary};
  transition: 0.4s;

  > svg {
    margin: 0 2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.whitePrimary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparentColor};
  }
`;
