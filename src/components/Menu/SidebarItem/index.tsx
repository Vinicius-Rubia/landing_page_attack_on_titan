import { Container } from "./style";
import React from "react";

interface ISidebarItem {
  Icon: React.ComponentType;
  Text: string;
}

const SidebarItem = ({ Icon, Text }: ISidebarItem) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
