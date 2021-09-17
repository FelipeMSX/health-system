import React from "react";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";

import { Container, LeftContainer } from "./styles";
import { UseAppContext } from "../../contexts/application-context";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import StyledMaterialButton from "../../components/icon-button";

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
      {/* <IconButton onClick={() => setSideBarVisibilty(false)} color="primary"> */}
      <StyledMaterialButton>
        <MenuOpenRoundedIcon />
      </StyledMaterialButton>

      {/* </IconButton> */}
    </Container>
  );
};

export default AppLogo;

export const MenuOpenIcon = styled(MenuOpenRoundedIcon)<Props>`
  width: 20px;
  height: 20px;
  color: "var(--white)";
  opacity: 0.7;
  /* color: var(--white); */
`;
