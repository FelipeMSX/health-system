import React, { useState } from "react";

import { Container, UserData, UserPicture, LinkContent, Title, DirectLink, LinkInfo, PersonIcon } from "./styles";

import { Link } from "react-router-dom";
import AppLogo from "./app-logo";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart } from "react-icons/fa";

const SideBar: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);

  return (
    <>
      <AppLogo></AppLogo>
      <Container className={isOpened ? "" : "expanded"}>
        <UserData>
          <h1>Felipe Morais</h1>
          <span>felipeprodev@gmail.com</span>
          <UserPicture>
            <img src="UserPicture.jpg"></img>
          </UserPicture>
        </UserData>
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
