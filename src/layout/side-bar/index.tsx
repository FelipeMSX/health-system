import React, { useState } from "react";

import { Container, UserData, UserPicture, LinkContent, Title, DirectLink, LinkInfo, PersonIcon } from "./styles";

import { Link } from "react-router-dom";
import AppLogo from "./app-logo";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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
            <h1>Applications</h1>
          </Title>
          {/* <GroupLink>
                    <ul>
                        <li>primeiro item</li>
                        <li>segundo item</li>
                        <li>terceiro item</li>
                    </ul>
                </GroupLink> */}
          <DirectLink>
            <LinkInfo>
              <Link to="/health-agent" style={{ textDecoration: "none" }}>
                <PersonIcon />
                <span>Agente de Saúde Lis</span>
              </Link>
            </LinkInfo>
          </DirectLink>

          <DirectLink>
            <LinkInfo>
              <Link to="/health-agent/create" style={{ textDecoration: "none" }}>
                <PersonIcon />
                <span>Agente de Saúde Cas</span>
              </Link>
            </LinkInfo>
          </DirectLink>

          <DirectLink>
            <LinkInfo>
              <Link to="/street" style={{ textDecoration: "none" }}>
                <PersonIcon />
                <span>Rua</span>
              </Link>
            </LinkInfo>
          </DirectLink>
        </LinkContent>
      </Container>
    </>
  );
};

export default SideBar;
