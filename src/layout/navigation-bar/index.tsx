import { Button } from "antd";
import React from "react";
// import IconButton from "../../components/icon-button";
import { UseAppContext } from "../../contexts/application-context";

import { Container, LeftBar, RightBar, UserInfo, UserLabel, ToggleableItem } from "./styles";
import { MenuFoldOutlined } from "@ant-design/icons";

export interface Props {
  isOpened?: boolean;
}

const NavBar: React.FC<Props> = ({ isOpened }) => {
  const { isSideBarExpanded, setSideBarVisibilty } = UseAppContext();

  return (
    <Container className={isSideBarExpanded ? "" : "expanded"}>
      <LeftBar>
        <ToggleableItem isOpened={!isSideBarExpanded}>
          <Button
            className="secondary"
            size="large"
            shape="circle"
            icon={<MenuFoldOutlined />}
            onClick={() => setSideBarVisibilty(!isSideBarExpanded)}
          />
        </ToggleableItem>
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
