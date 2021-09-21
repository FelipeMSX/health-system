import React from "react";

import { Container, LeftContainer } from "./styles";
import { UseAppContext } from "../../contexts/application-context";
import styled from "styled-components";
import StyledMaterialButton from "../../components/icon-button";

import { MenuFoldOutlined, SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

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
      <Button
        className="primary"
        shape="circle"
        size="large"
        icon={<MenuFoldOutlined />}
        onClick={() => setSideBarVisibilty(false)}
      />
    </Container>
  );
};

export default AppLogo;
