import React from "react";
// import IconButton from "../../components/icon-button";
import IconButton from "@mui/material/IconButton";
import { UseAppContext } from "../../contexts/application-context";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";

import { Container, LeftBar, RightBar, UserInfo, UserLabel, ToggleableItem } from "./styles";

export interface Props {
  isOpened?: boolean;
}

const NavBar: React.FC<Props> = ({ isOpened }) => {
  const { isSideBarExpanded, setSideBarVisibilty } = UseAppContext();

  return (
    <Container className={isSideBarExpanded ? "" : "expanded"}>
      <LeftBar>
        <ToggleableItem isOpened={true}>
          <div>
            <IconButton onClick={() => setSideBarVisibilty(true)}>
              <MenuOpenRoundedIcon />
            </IconButton>
          </div>
        </ToggleableItem>

        {/* <IconButton iconColor={"black"} color={"red"} hoverColor={"var(--lightgray)"} /> */}
      </LeftBar>
      <RightBar>
        <UserInfo>
          <UserLabel>
            <h1>Felipe Morais</h1>
            <span>Administrador</span>
          </UserLabel>
          <img src="UserPicture.jpg"></img>
        </UserInfo>
      </RightBar>
    </Container>
  );
};

export default NavBar;
