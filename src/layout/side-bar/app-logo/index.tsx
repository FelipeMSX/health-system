import React from "react";

import { Container, LeftContainer } from "./styles";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { RootState } from "../../../store/store";
import { close } from "../../../store/slices/sidebar-slice";
import { useDispatch, useSelector } from "react-redux";

const AppLogo: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);
  const dispatch = useDispatch();
  return (
    <Container className={isOpened ? "" : "expanded"}>
      <LeftContainer>
        <img src="logo192.png"></img>
        <span>Health</span>
      </LeftContainer>
      <Button
        className="primary"
        shape="circle"
        size="large"
        icon={<MenuFoldOutlined />}
        onClick={() => dispatch(close())}
      />
    </Container>
  );
};

export default AppLogo;
