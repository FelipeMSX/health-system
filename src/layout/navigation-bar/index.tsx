import { Button } from "antd";
import React from "react";
// import IconButton from "../../components/icon-button";

import { Container, LeftBar, RightBar, UserInfo, UserLabel, ToggleableItem } from "./styles";
import { MenuFoldOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { open } from "../../store/slices/sidebar-slice";

const NavBar: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);
  const dispatch = useDispatch();

  return (
    <Container className={isOpened ? "" : "expanded"}>
      <LeftBar>
        <ToggleableItem isOpened={!isOpened}>
          <Button
            className="secondary"
            size="large"
            shape="circle"
            icon={<MenuFoldOutlined />}
            onClick={() => dispatch(open())}
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
