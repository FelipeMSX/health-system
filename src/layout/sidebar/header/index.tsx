import React from "react";

import { MenuFoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { RootState } from "../../../store/store";
import { close } from "../../../store/slices/sidebar-slice";
import { useDispatch, useSelector } from "react-redux";
import { Content, Container } from "./styles";

const Header: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);
  const dispatch = useDispatch();

  return (
    <Container className={isOpened ? "" : "expanded"}>
      <Content>
        <img src="logo192.png"></img>
        <span>Health</span>
      </Content>
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

export default Header;
