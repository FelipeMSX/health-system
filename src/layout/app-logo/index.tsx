import React from "react";
import { MenuOpen } from "@styled-icons/material-rounded/MenuOpen";

import { Container, LeftContainer } from "./styles";
import { UseAppContext } from "../../contexts/ApplicationContext";
import IconButton from "../../components/icon-button";
import styled from "styled-components";

export interface Props {
  isOpened?: boolean;
}

const AppLogo: React.FC<Props> = ({ isOpened }) => {
  const { isSideBarExpanded, setSideBarVisibilty } = UseAppContext();

  return (
    <Container className={isSideBarExpanded ? "" : "expanded"}>
      <LeftContainer>
        <img src="logo192.png"></img>
        <span>Health</span>
      </LeftContainer>
      <IconButton icon="menu_open" onClick={() => setSideBarVisibilty(false)}></IconButton>
    </Container>
  );
};

export default AppLogo;

export const MenuOpenIcon = styled(MenuOpen)<Props>`
  width: 20px;
  height: 20px;
  color: "var(--white)";
  opacity: 0.7;
  /* color: var(--white); */
`;
