import { Container } from "./style";

import {
  IoCloseSharp,
  IoNotificationsSharp,
  IoHome,
  IoSearchSharp,
  IoAddSharp,
  IoAlbumsSharp,
  IoRocketSharp,
} from "react-icons/io5";

import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }: any) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <div className="header-menu">
        <IoCloseSharp onClick={closeSidebar} />
        <IoNotificationsSharp />
      </div>
      <div>
        <a href="#">
          <SidebarItem Icon={IoHome} Text="Início" />
        </a>
        <a href="#">
          <SidebarItem Icon={IoSearchSharp} Text="Buscar" />
        </a>
        <a href="#">
          <SidebarItem Icon={IoRocketSharp} Text="Lançamentos" />
        </a>
        <a href="#">
          <SidebarItem Icon={IoAlbumsSharp} Text="Minha lista" />
        </a>
        <a href="#">
          <SidebarItem Icon={IoAddSharp} Text="Cadastrar" />
        </a>
      </div>
    </Container>
  );
};

export default Sidebar;
