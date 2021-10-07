import React from "react";

import { RootState } from "../../../store/store";
import { close } from "../../../store/slices/sidebar-slice";
import { useDispatch, useSelector } from "react-redux";
import { Content, Container } from "./styles";
import StyledMaterialButton from "../../../components/icon-button";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { IconButton } from "@mui/material";

const Header: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.sidebar.isOpened);
  const dispatch = useDispatch();

  return (
    <Container className={isOpened ? "" : "expanded"}>
      <Content>
        <img src="logo192.png"></img>
        <span>Health</span>
      </Content>
      <IconButton color="primary" onClick={() => dispatch(close())}>
        <MenuOpenRoundedIcon />
      </IconButton>
    </Container>
  );
};

export default Header;
