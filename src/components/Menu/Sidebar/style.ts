import styled from "styled-components";

interface IContainer {
  sidebar: boolean;
}

export const Container = styled.div<IContainer>`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  width: 300px;
  left: ${({sidebar}) => (sidebar ? "0" : "-100%")};
  z-index: 1;
  animation: showSidebar 0.4s;

  .header-menu {
    display: flex;
    justify-content: space-between;
    margin: 5rem 1.5rem;

    svg {
      font-size: 3em;
      color: white;
      cursor: pointer;
    }
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }

    to {
      opacity: 1;
      width: 300px;
    }
  }
`;
