import React, { useState } from "react";

import { Link } from "react-router-dom";
import Header from "./header";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import UserArea from "./user-area/user-area";
import { Container, LinkContent, Title } from "./styles";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AddReactionRoundedIcon from "@mui/icons-material/AddReactionRounded";

const SideBar: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.ui.isSideBarVisible);

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
              <MenuItem icon={<AccessTimeRoundedIcon />}>
                Agente de Saúde
                <Link to="/health-agent" />
              </MenuItem>
              <SubMenu title="Components" icon={<AddReactionRoundedIcon />}>
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
