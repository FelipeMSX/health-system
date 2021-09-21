import React, { useState } from "react";

import { Link } from "react-router-dom";
import Header from "./header";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart } from "react-icons/fa";
import UserArea from "./user-area/user-area";
import { Container, LinkContent, Title } from "./styles";

const SideBar: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);

  return (
    <>
      <Header></Header>
      <Container className={isOpened ? "" : "expanded"}>
        <UserArea />
        <LinkContent>
          <Title>
            <h1>Aplicação</h1>
          </Title>
          <ProSidebar>
            <Menu>
              <MenuItem icon={<FaGem />}>
                Agente de Saúde
                <Link to="/health-agent" />
              </MenuItem>
              <SubMenu title="Components" icon={<FaHeart />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
          </ProSidebar>
        </LinkContent>
      </Container>
    </>
  );
};

export default SideBar;
