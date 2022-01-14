import React from "react";

import { RootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Content, Container } from "./styles";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { IconButton } from "@mui/material";
import { toogleSideBar } from "../../../store/slices/ui/ui-slice";

const Header: React.FC = () => {
  const isOpened = useSelector((state: RootState) => state.ui.isSideBarVisible);
  const dispatch = useDispatch();

  return (
    <Container className={isOpened ? "" : "expanded"}>
      <Content>
        <img src="logo192.png"></img>
        <span>Health</span>
      </Content>
      <IconButton color="primary" onClick={() => dispatch(toogleSideBar(false))}>
        <MenuOpenRoundedIcon />
      </IconButton>
    </Container>
  );
};

export default Header;
